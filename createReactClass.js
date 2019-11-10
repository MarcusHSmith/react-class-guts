const fs = require("fs");

const args = process.argv.slice(2);
const className = args[0];
console.log("CLASSNAME  ", className);

const propsName = `I${className}Props`;
const stateName = `I${className}State`;

let createdClass = `import React from "react"

export interface ${propsName} {}
export interface ${stateName} {}

class ${className} extends React.Component<${propsName}, ${stateName}> {
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
export default ${className}

	`;

// write to a new file named 2pac.txt
fs.writeFile("createdClass.tsx", createdClass, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log("Class saved!");
});
