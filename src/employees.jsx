let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin A'
let aron = 'Aron B'
let Ted = 'Ted Mosby'
let Jee = 'Jeevan Rohith'
const element = (
    <ul style={{'color':'green', 'fontSize': '20px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{aron}</li>
        <li>{Ted}</li>
        <li>{Jee}</li>

    </ul>
)
ReactDOM.render(element, document.getElementById('content'))