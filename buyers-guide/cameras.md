# Camera Recommendations

## Camera Checklist

For optimal Scrypted performance in [HomeKit](/homekit), [Alexa](/alexa), [Google Home](/google-home), and [Scrypted NVR](/scrypted-nvr/), look for:
  * Local streaming via RTSP/RTMP
  * Wired connection (power over ethernet) is heavily recommended. Use wireless sparingly to reach areas that may not be easily serviced with PoE.
  * 2-3 `Main` and `Substreams`. Additional `Substreams` provides Scrypted with the flexibility to provide the best stream for any connection.
  * H.264 video with configurable codec settings (`Framerate`, `Bitrate`, and `Frame Interval`).

Unifi cameras are recommended, but this doc will focus on cameras that do not require adoption into the Unifi ecosystem, which can be cost prohibitive or not meet specific hardware requirements. One can generally find better cameras at lower prices and more flexibility in choices.

The links and models below are ones that [@koush](https://github.com/koush) has personally purchased or have received positive user reports. Please verify that the link corresponds with the given model number, as the listing under the link may change.

## Doorbell

In addition to the Unifi G4 Doorbell, the following doorbells have full Scrypted support: doorbell events and two way audio.

* [Reolink Wifi/PoE Doorbell](https://www.amazon.com/REOLINK-Doorbell-Detection-Storage-Assistant/dp/B0B7S3JSG7/ref=sr_1_3?hvadid=623182026151&hvdev=c&hvlocphy=9061303&hvnetw=g&hvqmt=e&hvrand=4474805440243407911&hvtargid=kwd-1392011983863&hydadcr=18883_13355422&keywords=reolink+camera+doorbell&qid=1681099620&sr=8-3&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840)

* [Amcrest AD410](https://www.amazon.com/Amcrest-Doorbell-Detection-Weatherproof-Wide-Angle/dp/B091KMT9GB/ref=sr_1_1?crid=1Y6SVFORAH6GS&keywords=ad410&qid=1669356288&s=electronics&sprefix=ad410%2Celectronics%2C145&sr=1-1&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840)

::: tip
A two way audio camera can be combined with a smart button to create a doorbell in Scrypted. This is a flexible and reliable solution. Within HomeKit, Google Home, and Alexa, the doorbell group will behave exactly like any other Doorbell. See the [DIY Doorbell](https://github.com/koush/scrypted/wiki/Do-It-Yourself-Doorbell).
:::

## 8MP/4K Cameras

  * One Way Audio
    * [Amcrest IP8M-T2669EW-AI](https://www.amazon.com/gp/product/B08CWGJY37/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1): This has 3 streams, and a great price. Solid 4K choice on a budget.
    * Hivkision models with 3 streams such as DS-2CD2086G2-IU are highly recommended, but 2 streams is totally fine too. More expensive but has better image quality in both day and night.
  * Two Way Audio
    * [Hikvision DS-2CD2386G2-ISU/SL](https://www.amazon.com/Hikvision-DS-2CD2386G2-ISU-SL-AcuSense-Original/dp/B09JJWYQJ5/ref=sr_1_1_sspa?crid=GV0C06DJSRXA&keywords=DS-2CD2386G2-ISU%2FSL&qid=1689003265&sprefix=ds-2cd2386g2-isu%2Fsl%2Caps%2C192&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1): Stunning picture quality.

::: warning
It is not recommended to buy a 4K wireless cameras, as the stream bitrate will be problematic on a wireless network, resulting in dropped frames and connections.
:::

## 4MP/2K Cameras

  * PoE
    * One Way Audio
      * [Amcrest IP5M-T1179EW](https://www.amazon.com/Amcrest-5-Megapixel-NightVision-Weatherproof-IP5M-T1179EW-28MM/dp/B083G9KT4C/ref=sr_1_2_sspa?crid=3GF8K377TKHYI&keywords=amcrest+4mp&qid=1669361597&sprefix=amcrest+4mp%2Caps%2C156&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1)
      * [Reolinks 810a](https://www.amazon.com/REOLINK-Detection-Timelapse-Recording-RLC-810A/dp/B07K74GWX5/ref=sr_1_1_sspa?crid=3HM3VPTXYPTQO&keywords=reolink%2B4K%2Bpoe&qid=1689003324&sprefix=reolink%2B4K%2Bpo%2Caps%2C136&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1): Cheap and has 3 RTMP streams. This camera is advertised as a 4K camera, but the 4K stream is HEVC/H.265 only, which is not recommended for use with Scrypted. The H.264 stream is 2K.
      * Any Amcrest, Hikvision (Hitosino), or Reolink is fine really.
    * Two Way Audio
      * [Hikvision DS-2CD2346G2-ISU/SL](https://www.amazon.com/HITOSINO-Acusense-Darkfighter-Camera-Built/dp/B092MGTHNS/ref=sr_1_10?crid=1SNGDCXTCUTQ7&keywords=hitosino%2Btwo%2Bway&qid=1669354931&s=electronics&sprefix=hitosino%2Btwo%2Bway%2Celectronics%2C105&sr=1-10&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&th=1)
  * Wireless
    * One Way Audio
      * [Reolink 510a](https://www.amazon.com/Security-Security-2-4-Detection-Waterproof-RLC-510WA/dp/B08PYN7TS2/ref=sr_1_1_sspa?crid=3C6EUD88K8I8S&keywords=reolink+2K+wireless&qid=1689004037&sprefix=reolink+2k+wireles%2Caps%2C129&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1)
    * Two Way Audio
      * [Amcrest IP4M-1041](https://www.amazon.com/Amcrest-UltraHD-Security-4-Megapixel-IP4M-1041W/dp/B095XD17K5/ref=sr_1_1_sspa?crid=27ASRHBUE0BM4&keywords=4mp+amcrest&qid=1669355229&s=electronics&sprefix=4mp+amcrest%2Celectronics%2C107&sr=1-1-spons&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1): Indoor camera.
      * [Tapo C110](https://www.amazon.com/smart-indoor-security-camera-tapo/dp/B09YL5G1Y8/ref=sr_1_6?hvadid=570485739804&hvdev=c&hvlocphy=9033320&hvnetw=g&hvqmt=e&hvrand=12813899484270259277&hvtargid=kwd-822050146986&hydadcr=10039_13478011&keywords=tapo%2Bc200&qid=1689003849&sr=8-6&th=1): Indoor camera.
      * [Tapo C210](https://www.amazon.com/indoor-pet-wifi-camera-tapo/dp/B09Y8TLP25/ref=sr_1_2?crid=499XUYK8UKNR&keywords=tapo%2Bc210&qid=1689003913&s=electronics&sprefix=tapo%2Bc210%2Celectronics%2C128&sr=1-2&th=1): Indoor camera. Has Pan/Tilt/Zoom functionality.
      * [Tapo C310](https://www.amazon.com/security-camera-wireless-outdoor-tapo/dp/B08LHG2W7Y/ref=asc_df_B08LHG2W7Y/?tag=hyprod-20&linkCode=df0&hvadid=600153859656&hvpos=&hvnetw=g&hvrand=18132377741092454297&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033320&hvtargid=pla-1129824239938&th=1): Outdoor camera.

## 1080P/2MP

The price point difference between 1080p and 2K is minimal, just get a 2K camera and run it at 1080p if you must. The same brand recommendations as 2K apply.

  * Wireless
    * Two Way Audio
      * [Tapo C200](https://www.amazon.com/dp/B0829KDY9X?psc=1&ref=ppx_yo2ov_dt_b_product_details): This is an incredible camera for the price point of under $30. 1080p, two way audio, PTZ, and wireless.
