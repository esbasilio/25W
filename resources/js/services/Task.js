const baseUrl = "http://localhost:8000/api/task";

import axios from "axios";

const task = {};


task.list = async() => {
	const urlList = baseUrl + "-list";
	const res = await axios.get(urlList)
	.then(response=>{return response.data;})
	.catch(error=>{return error;});
	return res;
}

task.save = async (data) => {

	const urlSave = baseUrl + "-add";
	const res = await axios.post(urlSave, data)
	.then(response => {return response.data})
	.catch(error=>{return error;});
	return res;
}


task.get = async (id) => {

	const urlGet = baseUrl + "-get/" + id;
	const res = await axios.get(urlGet)
	.then(response => {return response.data})
	.catch(error=>{return error;});
	return res;
}


task.update = async (data) => {

	const urlUpdate = baseUrl + "-update/" + data.id;
	const res = await axios.put(urlUpdate, data)
	.then(response => {return response.data})
	.catch(error=>{return error;});
	return res;
}

export default task;