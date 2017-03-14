package com.meli.academy.grails

import grails.converters.JSON
import groovy.json.JsonSlurper

class MediosofflineController {

    def index() {
		def url = new URL('https://api.mercadolibre.com/sites/MLA/payment_methods/')
		def connection = (HttpURLConnection)url.openConnection()
		connection.setRequestMethod("GET")
		connection.setRequestProperty("Accept", "application/json")
		connection.setRequestProperty("User-Agent", "Mozilla/5.0")
		JsonSlurper json = new JsonSlurper()
		ArrayList array = (ArrayList) json.parse(connection.getInputStream())
		array.add([id:"off",name:"medios off"])
		[paymentMethods:array]
	}
	def index_radio() {
		def url = new URL('https://api.mercadolibre.com/sites/MLA/payment_methods/')
		def connection = (HttpURLConnection)url.openConnection()
		connection.setRequestMethod("GET")
		connection.setRequestProperty("Accept", "application/json")
		connection.setRequestProperty("User-Agent", "Mozilla/5.0")
		JsonSlurper json = new JsonSlurper()
		ArrayList array = (ArrayList) json.parse(connection.getInputStream())
		[paymentMethods:array]
	}
	def getAddress(){
		def radius;
		if(!params.radius){
			radius=""
		}else{
			radius=params.radius
		}
		
		render "<script>get(\"${params.address}\",\"${params.limit}\",\"${params.paymentMethod}\",\"${radius}\")</script>"
	}
	def extra(){
		
	}
	def extra2(){
		def url = new URL('https://api.mercadolibre.com/sites/MLA/payment_methods/')
		def connection = (HttpURLConnection)url.openConnection()
		connection.setRequestMethod("GET")
		connection.setRequestProperty("Accept", "application/json")
		connection.setRequestProperty("User-Agent", "Mozilla/5.0")
		JsonSlurper json = new JsonSlurper()
		ArrayList array = (ArrayList) json.parse(connection.getInputStream())
		ArrayList array2 = new ArrayList();
		for(def i = 0; i < array.size; i++){
			def url2 = new URL('https://api.mercadolibre.com/sites/MLA/payment_methods/' + array[i].id + '/agencies/count?near_to='+params.latitud+',' + params.longitud+',' + params.radius)
			println(url2)
			def connection2 = (HttpURLConnection)url2.openConnection()
			connection2.setRequestMethod("GET")
			connection2.setRequestProperty("Accept", "application/json")
			connection2.setRequestProperty("User-Agent", "Mozilla/5.0")
			JsonSlurper json2 = new JsonSlurper()
			array2.push(json2.parse(connection2.getInputStream()).count)
		}
		Map result = [:]
		for(def i = 0; i < array.size; i++){
			result[array[i].name] = array2[i]
		}
		result = (result.sort {it.value})
		String result2 = ""
		for(def i = 0; i < array.size;i++){
			result2 = result2.concat(array[i].name + ":" + array2[i] + ",")
		}
		println(result2)
		render "<script>get(\"${result2}\")</script>"
	}
}