package com.meli.academy.grails.geoApi

import grails.transaction.Transactional

@Transactional
class MeliService {

	def closestAgency(double lat, double lng, int radius) {
//		Retrieves any agency near lat, long
		def result = null
		withHttp(uri: "https://api.mercadolibre.com") {
			def html = get(path : "/sites/"+siteId+"/payments_methods/"+paymentMethodId+"/", query : [])
			
			
//			if ( html.results != null && html.results.size() > 0 ) {
//				def partial = html.results[0]
//				if ( partial.geometry != null && partial.geometry.location != null) {
//					def lat = partial.geometry.location.lat
//					def lng = partial.geometry.location.lng
//					result = [lat:Double.valueOf(lat.toString()), lng:Double.valueOf(lng.toString())]
//				}
//			}
		}
		return result
	}

}
