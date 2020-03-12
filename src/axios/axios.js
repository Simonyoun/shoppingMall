import axios from 'axios'
export function request (config,Toload){
	const instace  = axios.create({
		 baseURL: 'http://www.tongxuejia.top/phpdata',
		 timeout: 5000
	})
	Toload(instace)
	return instace(config)
}