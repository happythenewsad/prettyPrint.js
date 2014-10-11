/*
		prettyPrint prints javascript objects in an easily readable way
		@author Peter Kong
*/

(function(options){

	var _config = {
		//defaults
		namespace: Window,
		logger: console.log,
	}

	if(typeof(options) === "object"){
		if(options['namespace']){
			_config['namespace'] = options['namespace'];
		}
		if(options['logger']){
			_config['logger'] = options['logger'];
		}
	}

	_config['namespace'].prettyPrint = function(obj, offset){
	  if (typeof(offset) === "undefined"){
	      offset = "";
	  }
	  for (var p in obj){
	    if (obj.hasOwnProperty(p)){

	      if (typeof(obj[p]) == "object"){
	        _config['logger'](offset + p + ":");
	        _config['namespace'].prettyPrint(obj[p], offset.concat("  "));
	      }
	      else {
	        _config['logger'](offset + p + ":" + obj[p]);
	      }
	    }
	  }
	}

})(options)