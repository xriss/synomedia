#!/usr/bin/env node
/*

Copyright (c) 2020 Kriss Blank and licensed under the MIT license whose 
full text can be found at http://opensource.org/licenses/MIT

*/

var cmd=exports;

var ls=function(a) { console.log(util.inspect(a,{depth:null})); }


cmd.parse=function(argv)
{
	argv.filename_dflat=__filename

	argv.input    =   argv.input     || process.env.SYNOMEDIA_INPUT    || "input"
	argv.output   =   argv.output    || process.env.SYNOMEDIA_OUTPUT   || "output"

}

cmd.run=async function(argv)
{
	if( argv._[0]=="test" )
	{
		await require("./test.js").all()
		return
	}

	// help text
	console.log(
`
>	synomedia test

Test sometests


`)
}

// if global.argv is set then we are inside another command so do nothing
if(!global.argv)
{
	var argv = require('yargs').argv
	global.argv=argv
	cmd.parse(argv)
	cmd.run(argv)
}
