const fs = require("fs");

const args = process.argv.slice(2);
const componentName = args[0];
console.log("CLASSNAME  ", componentName);

const propsName = `I${componentName}Props`;
const stateName = `I${componentName}State`;

let createdClass = `import React from "react"

export interface ${propsName} {}
export interface ${stateName} {}

class ${componentName} extends React.Component<${propsName}, ${stateName}> {
	constructor(props) {
		super(props)
	}

	static getDerivedStateFromProps(nextProps: ${propsName}, prevState: ${stateName}) {

	render() {
		return (<></>);
	}

	componentDidMount() {}
	

shouldComponentUpdate(nextProps: ${propsName}, prevState: ${stateName}) {
	return true;
}

getSnapshotBeforeUpdate(prevProps: ${propsName}, prevState: ${stateName}) {}

componentDidUpdate(prevProps: ${propsName}, prevState: ${stateName}, snapshot) {}

}
export default ${componentName}

	`;

let className = "";
for (i in componentName) {
  const char = componentName.charAt(i);
  if (char !== char.toUpperCase() || i == 0) {
    className += char.toLowerCase();
  } else {
    className += "-" + char.toLowerCase();
  }
}

// write to a new file named 2pac.txt
fs.writeFile(`${className}.tsx`, createdClass, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log("Class saved!");
});
