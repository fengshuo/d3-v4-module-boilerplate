import npm from "rollup-plugin-node-resolve";

export default {
	entry: "index.js",
	format: "umd", 
	moduleName: "d3MyModule", 
	plugins: [npm({jsnext:true})], 
	dest: "build/d3MyModule.js"
}