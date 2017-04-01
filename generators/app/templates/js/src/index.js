

const <%= ExportProjectName %> = {
  create(options, callbackID) {
      alert("this is <%= ExportProjectName %> weex plugin")
  }
};


var meta = {
 <%= ExportProjectName %>: [{
    name: 'create',
    args: ['object', 'string']
  }]
};



if(window.Vue) {
  weex.registerModule('<%= ExportProjectName %>', <%= ExportProjectName %>);
}

function init(weex) {
  weex.registerApiModule('<%= ExportProjectName %>', <%= ExportProjectName %>, meta);
}
module.exports = {
  init:init
};
