package computerDatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://arquisoft.github.io")
		.inferHtmlResources(BlackList(""".*\.css""", """.*\.js""", """.*\.ico"""), WhiteList())
		.acceptHeader("image/webp,image/apng,image/*,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.9")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_2 = Map("Proxy-Connection" -> "keep-alive")

    val uri1 = "http://a.tile.osm.org"
    val uri2 = "http://c.tile.osm.org"
    val uri4 = "http://b.tile.osm.org"

	val scn = scenario("TestSimulation")
		.exec(http("request_0")
			.get("/viade_es3b/")
			.headers(headers_0))
		.pause(21)
		.exec(http("request_1")
			.get("/viade_es3b/")
			.headers(headers_0))
		.pause(34)
		.exec(http("request_2")
			.get(uri1 + "/13/3961/2999.png")
			.headers(headers_2)
			.resources(http("request_3")
			.get(uri2 + "/13/3961/2998.png")
			.headers(headers_2),
            http("request_4")
			.get(uri2 + "/13/3962/2997.png")
			.headers(headers_2),
            http("request_5")
			.get(uri2 + "/13/3964/2998.png")
			.headers(headers_2),
            http("request_6")
			.get(uri4 + "/13/3961/3000.png")
			.headers(headers_2),
            http("request_7")
			.get(uri1 + "/13/3964/2999.png")
			.headers(headers_2),
            http("request_8")
			.get(uri2 + "/13/3963/2999.png")
			.headers(headers_2),
            http("request_9")
			.get(uri4 + "/13/3962/2999.png")
			.headers(headers_2),
            http("request_10")
			.get(uri4 + "/13/3960/2998.png")
			.headers(headers_2),
            http("request_11")
			.get(uri1 + "/13/3963/2997.png")
			.headers(headers_2),
            http("request_12")
			.get(uri1 + "/13/3965/2998.png")
			.headers(headers_2),
            http("request_13")
			.get(uri1 + "/13/3963/3000.png")
			.headers(headers_2),
            http("request_14")
			.get(uri4 + "/13/3964/2997.png")
			.headers(headers_2),
            http("request_15")
			.get(uri4 + "/13/3963/2998.png")
			.headers(headers_2),
            http("request_16")
			.get(uri1 + "/13/3962/2998.png")
			.headers(headers_2),
            http("request_17")
			.get(uri4 + "/13/3961/2997.png")
			.headers(headers_2),
            http("request_18")
			.get(uri2 + "/13/3962/3000.png")
			.headers(headers_2),
            http("request_19")
			.get(uri2 + "/13/3965/2997.png")
			.headers(headers_2),
            http("request_20")
			.get(uri2 + "/13/3960/2999.png")
			.headers(headers_2),
            http("request_21")
			.get(uri1 + "/13/3960/2997.png")
			.headers(headers_2),
            http("request_22")
			.get(uri1 + "/13/3960/3000.png")
			.headers(headers_2),
            http("request_23")
			.get(uri2 + "/13/3965/3000.png")
			.headers(headers_2),
            http("request_24")
			.get(uri4 + "/13/3964/3000.png")
			.headers(headers_2),
            http("request_25")
			.get(uri4 + "/13/3965/2999.png")
			.headers(headers_2)))
		.pause(33)
		.exec(http("request_26")
			.get(uri4 + "/14/7925/5999.png")
			.headers(headers_2)
			.resources(http("request_27")
			.get(uri4 + "/14/7924/5997.png")
			.headers(headers_2),
            http("request_28")
			.get(uri1 + "/14/7925/5998.png")
			.headers(headers_2),
            http("request_29")
			.get(uri1 + "/14/7923/6000.png")
			.headers(headers_2),
            http("request_30")
			.get(uri2 + "/14/7926/5999.png")
			.headers(headers_2),
            http("request_31")
			.get(uri2 + "/14/7923/5999.png")
			.headers(headers_2),
            http("request_32")
			.get(uri2 + "/14/7925/6000.png")
			.headers(headers_2),
            http("request_33")
			.get(uri4 + "/14/7923/5998.png")
			.headers(headers_2),
            http("request_34")
			.get(uri1 + "/14/7924/5999.png")
			.headers(headers_2),
            http("request_35")
			.get(uri2 + "/14/7927/5998.png")
			.headers(headers_2),
            http("request_36")
			.get(uri2 + "/14/7925/5997.png")
			.headers(headers_2),
            http("request_37")
			.get(uri1 + "/14/7926/6000.png")
			.headers(headers_2),
            http("request_38")
			.get(uri2 + "/14/7924/5998.png")
			.headers(headers_2),
            http("request_39")
			.get(uri1 + "/14/7923/5997.png")
			.headers(headers_2),
            http("request_40")
			.get(uri4 + "/14/7926/5998.png")
			.headers(headers_2),
            http("request_41")
			.get(uri4 + "/14/7927/6000.png")
			.headers(headers_2),
            http("request_42")
			.get(uri4 + "/14/7922/5999.png")
			.headers(headers_2),
            http("request_43")
			.get(uri1 + "/14/7926/5997.png")
			.headers(headers_2),
            http("request_44")
			.get(uri4 + "/14/7924/6000.png")
			.headers(headers_2),
            http("request_45")
			.get(uri1 + "/14/7927/5999.png")
			.headers(headers_2),
            http("request_46")
			.get(uri2 + "/14/7922/5997.png")
			.headers(headers_2),
            http("request_47")
			.get(uri4 + "/14/7927/5997.png")
			.headers(headers_2),
            http("request_48")
			.get(uri1 + "/14/7922/5998.png")
			.headers(headers_2),
            http("request_49")
			.get(uri2 + "/14/7922/6000.png")
			.headers(headers_2),
            http("request_50")
			.get(uri1 + "/14/7929/5997.png")
			.headers(headers_2),
            http("request_51")
			.get(uri2 + "/14/7928/5997.png")
			.headers(headers_2),
            http("request_52")
			.get(uri2 + "/14/7929/5996.png")
			.headers(headers_2),
            http("request_53")
			.get(uri4 + "/14/7928/5996.png")
			.headers(headers_2),
            http("request_54")
			.get(uri4 + "/14/7929/5998.png")
			.headers(headers_2),
            http("request_55")
			.get(uri2 + "/14/7930/5995.png")
			.headers(headers_2),
            http("request_56")
			.get(uri1 + "/14/7928/5998.png")
			.headers(headers_2),
            http("request_57")
			.get(uri4 + "/14/7929/5995.png")
			.headers(headers_2),
            http("request_58")
			.get(uri2 + "/14/7926/5996.png")
			.headers(headers_2),
            http("request_59")
			.get(uri1 + "/14/7930/5996.png")
			.headers(headers_2),
            http("request_60")
			.get(uri4 + "/14/7926/5995.png")
			.headers(headers_2),
            http("request_61")
			.get(uri2 + "/14/7927/5995.png")
			.headers(headers_2),
            http("request_62")
			.get(uri1 + "/14/7927/5996.png")
			.headers(headers_2),
            http("request_63")
			.get(uri4 + "/14/7930/5997.png")
			.headers(headers_2),
            http("request_64")
			.get(uri1 + "/14/7928/5995.png")
			.headers(headers_2),
            http("request_65")
			.get(uri2 + "/14/7930/5998.png")
			.headers(headers_2),
            http("request_66")
			.get(uri2 + "/12/1981/1498.png")
			.headers(headers_2),
            http("request_67")
			.get(uri1 + "/12/1982/1498.png")
			.headers(headers_2),
            http("request_68")
			.get(uri4 + "/12/1982/1499.png")
			.headers(headers_2),
            http("request_69")
			.get(uri1 + "/12/1981/1499.png")
			.headers(headers_2),
            http("request_70")
			.get(uri2 + "/12/1982/1497.png")
			.headers(headers_2),
            http("request_71")
			.get(uri2 + "/12/1984/1498.png")
			.headers(headers_2),
            http("request_72")
			.get(uri4 + "/12/1980/1498.png")
			.headers(headers_2),
            http("request_73")
			.get(uri2 + "/12/1980/1499.png")
			.headers(headers_2),
            http("request_74")
			.get(uri1 + "/12/1983/1497.png")
			.headers(headers_2),
            http("request_75")
			.get(uri4 + "/12/1984/1497.png")
			.headers(headers_2),
            http("request_76")
			.get(uri1 + "/12/1980/1500.png")
			.headers(headers_2),
            http("request_77")
			.get(uri4 + "/12/1983/1498.png")
			.headers(headers_2),
            http("request_78")
			.get(uri4 + "/12/1981/1497.png")
			.headers(headers_2),
            http("request_79")
			.get(uri2 + "/12/1983/1499.png")
			.headers(headers_2),
            http("request_80")
			.get(uri1 + "/12/1980/1497.png")
			.headers(headers_2),
            http("request_81")
			.get(uri1 + "/12/1983/1500.png")
			.headers(headers_2),
            http("request_82")
			.get(uri4 + "/12/1979/1499.png")
			.headers(headers_2),
            http("request_83")
			.get(uri2 + "/12/1979/1497.png")
			.headers(headers_2),
            http("request_84")
			.get(uri2 + "/12/1979/1500.png")
			.headers(headers_2),
            http("request_85")
			.get(uri4 + "/12/1981/1500.png")
			.headers(headers_2),
            http("request_86")
			.get(uri2 + "/12/1982/1500.png")
			.headers(headers_2),
            http("request_87")
			.get(uri1 + "/12/1979/1498.png")
			.headers(headers_2),
            http("request_88")
			.get(uri1 + "/12/1984/1499.png")
			.headers(headers_2),
            http("request_89")
			.get(uri4 + "/12/1984/1500.png")
			.headers(headers_2)))

	setUp(scn.inject(atOnceUsers(50) during(120 seconds))).protocols(httpProtocol)
}