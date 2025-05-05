let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let robin = 'Robin A';
let aron = 'Aron B';
let Ted = 'Ted Mosby';
let Jee = 'Jeevan Rohith';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'green',
    'fontSize': '20px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aron), /*#__PURE__*/React.createElement("li", null, Ted), /*#__PURE__*/React.createElement("li", null, Jee));
ReactDOM.render(element, document.getElementById('content'));
