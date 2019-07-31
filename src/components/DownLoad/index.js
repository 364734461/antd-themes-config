import React, { PureComponent } from "react";
import { Button, message } from "antd";

var idTmr;
const uri = "data:application/vnd.ms-excel;base64,";
const template = [
  "<html>",
  "<head>",
  '<meta charset="UTF-8">',
  "</head>",
  "<body>",
  "<table>{{table}}</table>",
  "</body>",
  "</html>"
].join("");

/**
 * exlBtn 按钮组件样式，默认为btn。可以设置为null，其他直接通过 ref 调用 exportExcel（state）方法执行导出操作。
 * columnsArr 同 table 1.0, 详情看readme
 */

class LayoutComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.loading === "doing") {
      this._excel();
      this.loading = "pendding";
    }
  }

  _renderTd = (data, index) => {
    const { columnsArr } = this.props;
    return (
      <tr key={index}>
        {columnsArr &&
          columnsArr.map((item, index) => {
            return (
              <td key={item.dataIndex}>
                {item.render
                  ? item.render(data[item.dataIndex], data, index)
                  : data[item.dataIndex]}
              </td>
            );
          })}
      </tr>
    );
  };

  _renderTable() {
    const { columnsArr } = this.props;

    this.curTableID = `exl-${+new Date()}`;

    return (
      <table id={this.curTableID}>
        <thead>
          <tr>
            {columnsArr &&
              columnsArr.map(item => {
                return <th key={item.dataIndex}>{item.title}</th>;
              })}
          </tr>
        </thead>
        <tbody>{this.state.data.map(this._renderTd)}</tbody>
      </table>
    );
  }

  exportExcel = state => {
    let thisState = state || {};
    if (!Array.isArray(thisState.data)) {
      const { getState } = this.props;
      const newState = getState ? getState() : null;
      if (!Array.isArray(newState.data)) {
        message.error("导出失败：获取数据发生错误！");
        return;
      }

      thisState = newState;
    }

    if (this.loading === "doing") {
      return;
    }
    this.loading = "doing";

    this.setState({
      data: thisState.data
    });
  };

  render() {
    const { exlBtn, buttonProps } = this.props;

    return (
      <div style={{ display: "inline-block" }}>
        {typeof exlBtn === "undefined" ? (
          <Button
            {...buttonProps}
            onClick={() => {
              this.exportExcel();
            }}
          >
            导出数据
          </Button>
        ) : (
          exlBtn
        )}
        <div style={{ display: "none" }}>
          <a href="javascript:;" id="exportExcel" />
          {this._renderTable()}
        </div>
      </div>
    );
  }

  _excel = () => {
    const { exlName } = this.props;
    const tableDom = document.getElementById(this.curTableID);

    const fileName = `${exlName}-${+new Date()}.xls`;

    if (getExplorer() === "ie") {
      let oXL = null;
      let oWB = null;
      let savechanges = true;
      let fname = null;
      try {
        oXL = new window.ActiveXObject("Excel.Application");
        oWB = oXL.Workbooks.Add();
        const xlsheet = oWB.Worksheets(1);
        const sel = document.body.createTextRange();
        sel.moveToElementText(tableDom);
        // sel.select;
        sel.execCommand("Copy");
        xlsheet.Paste();
        oXL.Visible = true;
        fname = oXL.Application.GetSaveAsFilename(
          fileName,
          "Excel Spreadsheets (*.xls), *.xls"
        );
      } catch (e) {
        message.error("导出失败：请确认安装了excel！");
      } finally {
        oWB.SaveAs(fname);
        // 不太明白这是干嘛的
        oWB.Close((savechanges = false));
        oXL.Quit();
        oXL = null;
        idTmr = window.setInterval(function() {
          window.clearInterval(idTmr);
          window.CollectGarbage();
        }, 1);
      }

      return;
    }

    const ctx = {
      worksheet: exlName || "Worksheet",
      table: tableDom.innerHTML
    };

    // window.location.href = uri + base64(format(template, ctx));
    const domsId = document.getElementById("exportExcel");
    domsId.href = uri + base64(format(template, ctx));
    domsId.download = fileName;
    domsId.click();
  };
}

//获取当前浏览器类型
function getExplorer() {
  var explorer = window.navigator.userAgent;
  //ie
  if (explorer.indexOf("MSIE") >= 0) {
    return "ie";
  }
  //firefox
  else if (explorer.indexOf("Firefox") >= 0) {
    return "Firefox";
  }
  //Chrome
  else if (explorer.indexOf("Chrome") >= 0) {
    return "Chrome";
  }
  //Opera
  else if (explorer.indexOf("Opera") >= 0) {
    return "Opera";
  }
  //Safari
  else if (explorer.indexOf("Safari") >= 0) {
    return "Safari";
  }
  return null;
}

function format(s, c) {
  return s.replace(/{{(\w+)}}/g, function(m, p) {
    return c[p];
  });
}

function base64(s) {
  return window.btoa(unescape(encodeURIComponent(s)));
}

export default LayoutComponent;
