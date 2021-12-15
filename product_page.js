
var productArr = [
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Hero_Bundle-_1_1_500x.jpg?v=1617893040", "name": "Lakme BLUSH AND GLOW SHEET MASK VALUE SET OF 10", "currentPrice": "₹599", "oldPrice": "1,000", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1000x1000-hero_1_500x.jpg?v=1620801652", "name": "Lakme 9TO5 VITAMIN C + SKINCARE VALUE SET", "currentPrice": "₹999", "oldPrice": "1,297", "discoutPrice": "23% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/img1_3_1_500x.jpg?v=1620910668", "name": "Lakme GREEN TEA ESSENTIALS KIT", "currentPrice": "₹699", "oldPrice": "847", "discoutPrice": "17% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5Primer_MatteLipColorRedLetter_500x.jpg?v=1598243140", "name": "Lakme 9 to 5 Primer + Matte Lip Color", "currentPrice": "₹300", "oldPrice": "500", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24544_H-8901030758850_3e09b888-1276-44a2-9665-fa293cbd5d3_500x.jpg?v=1601470864", "name": "Lakme Forever Matte Liquid Lip Color", "currentPrice": "₹295", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteMatteUltimateLipColorwithArganOilPetalPink_41b560b6-3f0d-47b2-bfd5-075cf7bc0934_500x.jpg?v=1599200805", "name": "Lakme Absolute Matte Ultimate Lip Color with Argan Oil", "currentPrice": "₹800", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Blackjack_500x.png?v=1598528925", "name": "Lakme Absolute Gel Stylist Nail Color", "currentPrice": "₹250", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/M2_500x.jpg?v=1601551735", "name": "Lakme Color Crush Nail Art", "currentPrice": "₹155", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5CCComplexionCareCream_9gmBeige_500x.jpg?v=1598101798", "name": "Lakme 9 to 5 CC Complexion Care Cream, 9gm", "currentPrice": "₹99", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/2-fop-smokin-glam_1_500x.jpg?v=1603894790", "name": "Lakme Absolute Spotlight Eyeshadow Palette", "currentPrice": "₹597", "oldPrice": "995", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Pinks-N238_500x.jpg?v=1603185561", "name": "Lakme True Wear Nail Color", "currentPrice": "₹88", "oldPrice": "110", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24329_S1-8901030719165_500x.jpg?v=1633765701", "name": "Lakme Insta Eye Liner", "currentPrice": "₹130", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24453_S1-8901030742804_500x.jpg?v=1611756792", "name": "Lakme 9 to 5 Primer + Matte Perfect Cover Foundation", "currentPrice": "₹352", "oldPrice": "475", "discoutPrice": "26% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24704_H-8901030776533_500x.jpg?v=1601452154", "name": "Lakme Cushion Matte", "currentPrice": "₹275", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Blue-Scape_500x.jpg?v=1628509200", "name": "Lakme 9 to 5 Primer + Gloss Nail Color", "currentPrice": "₹144", "oldPrice": "180", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeLipLoveChapstickCherry_500x.jpg?v=1598359759", "name": "Lakme Lip Love Chapstick", "currentPrice": "₹150", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/red-carnival_500x.jpg?v=1602153688", "name": "Lakme Absolute 3D Lipstick", "currentPrice": "₹640", "oldPrice": "800", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertUltraMatteSPF40PA_Compact-7g_500x.jpg?v=1598361828", "name": "Lakme Sun Expert Ultra Matte SPF 40 PA+++ Compact - 7 g", "currentPrice": "₹196", "oldPrice": "230", "discoutPrice": "15% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5NaturaleAloeAquaGel_500x.png?v=1598252908", "name": "Lakme 9to5 Naturale Aloe Aqua Gel", "currentPrice": "₹160", "oldPrice": "200", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteWhiteIntenseWet_DryCompactGoldenLight_500x.jpg?v=1603787165", "name": "Lakme  Absolute White Intense Wet & Dry Compact", "currentPrice": "₹742", "oldPrice": "800", "discoutPrice": "7% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Shade_PM14_500x.jpg?v=1603456524", "name": "Lakme Enrich Matte Lipstick", "currentPrice": "₹295", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeEyeconicCurlingMascara_Black_9ml_500x.jpg?v=1598357798", "name": "Lakme  Eyeconic Curling Mascara, 9 ml", "currentPrice": "₹From 375", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/21759_H_Eyebrow_Pencil-Black_500x.jpg?v=1603358609", "name": "Lakme Eyebrow Pencil - Black", "currentPrice": "₹75", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/22639_H-8901030358173_0e21ca6f-d797-4882-a1c7-875632a4ff81_500x.jpg?v=1628506222", "name": "Lakme True Wear Color Crush Nail Color", "currentPrice": "₹136", "oldPrice": "170", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5BlackImpactLiner_500x.jpg?v=1598250959", "name": "Lakme 9to5 Black Impact Liner", "currentPrice": "₹240", "oldPrice": "300", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/BeigeHoney05_500x.jpg?v=1603098972", "name": "Lakme Perfect Radiance Compact", "currentPrice": "₹185", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteShineLiquidEyeLiner-4.5mlBlack_500x.jpg?v=1598360240", "name": "Lakme Absolute Shine Line Liquid Eye Liner - 4.5 ml", "currentPrice": "₹360", "oldPrice": "450", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteBlurPerfectPrimer_31becf6f-2e68-4b45-a092-801ddc4d1fba_500x.jpg?v=1607324657", "name": "Lakme Absolute Blur Perfect Makeup Primer, 10gm", "currentPrice": "₹239", "oldPrice": "299", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Insane_Pink_500x.jpg?v=1603444451", "name": "Lakme Absolute Matte Revolution Lip Color", "currentPrice": "₹640", "oldPrice": "800", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Absolute_Infinity_Eye_Shadow_Palette_Pink_Paradise_500x.jpg?v=1607325936", "name": "Lakme Absolute Infinity Eye Shadow Palette - Pink Paradise", "currentPrice": "₹597", "oldPrice": "995", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Shade-02_500x.jpg?v=1603192641", "name": "Lakme Invisible Finish SPF 8 Foundation", "currentPrice": "₹280", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5WeightlessMousseFoundationBeigeCaramel_500x.jpg?v=1598263815", "name": "Lakme 9to5 Weightless Mousse Foundation", "currentPrice": "₹440", "oldPrice": "550", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteSkinLighten_500x.png?v=1631695299", "name": "Lakme Perfect Radiance Intense Whitening Face Wash 50 g", "currentPrice": "₹160", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteInfinityEyeshadowPalette-MidnightMagic_500x.jpg?v=1607325924", "name": "Lakme Absolute Infinity Eye shadow Palette - Midnight Magic", "currentPrice": "₹597", "oldPrice": "995", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/PlumFeather_500x.jpg?v=1602845163", "name": "Lakme 9to5 Weightless Mousse Lip and Cheek Color", "currentPrice": "₹608", "oldPrice": "675", "discoutPrice": "10% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteMattrealSkinNaturalMousseGoldenlight_500x.jpg?v=1598351403", "name": "Lakme Absolute Mattreal Skin Natural Mousse", "currentPrice": "₹600", "oldPrice": "750", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePlump_ShineLipGlossPlumShine_500x.jpg?v=1598357816", "name": "Lakme Absolute Plump & Shine Lip Gloss", "currentPrice": "₹400", "oldPrice": "500", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24502_H_81cf49de-f318-45c7-b7d3-70df7bcd5acd_500x.jpg?v=1607325904", "name": "Lakme Absolute Infinity Eye shadow Palette - Coral Sunset", "currentPrice": "₹597", "oldPrice": "995", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Red-Stop_500x.jpg?v=1603539517", "name": "Lakme Enrich Lip Crayon", "currentPrice": "₹275", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Liner_Pen_Fine_Tip_1-24048_H_500x.jpg?v=1603188652", "name": "Lakme Eyeconic Liner Pen Fine Tip, 1 ml", "currentPrice": "₹380", "oldPrice": "475", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteArganOilSerumFoundationRoseSilk_500x.png?v=1598333747", "name": "Lakme Absolute Argan Oil Serum Foundation", "currentPrice": "₹600", "oldPrice": "750", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Cool-Tan_500x.jpg?v=1626344413", "name": "Lakme Absolute 3D Cover Foundation", "currentPrice": "₹600", "oldPrice": "750", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27132_S1-8901030732737_ab62e294-8a52-45bb-ade0-987d6474eef4_500x.jpg?v=1633763554", "name": "Lakme Absolute Mattereal Mousse Concealer", "currentPrice": "₹600", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1.27309_H-8901030781568_b5e074dd-b6c4-4a8a-891a-0c04ffe87aac_500x.jpg?v=1600872061", "name": "Lakme Peach Milk Ultra Light Gel 65 g", "currentPrice": "₹120", "oldPrice": "150", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePerfectRadianceSkinLighteningDayCreme15g_500x.jpg?v=1603535870", "name": "Lakme Absolute Perfect Radiance Skin Lightening Day Creme 15 g", "currentPrice": "₹99", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27307-H1_500x.jpg?v=1603464506", "name": "Lakme Sun Expert Tinted Sunscreen 50SPF 100g", "currentPrice": "₹354", "oldPrice": "416", "discoutPrice": "15% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Color-55_500x.jpg?v=1603465008", "name": "Lakme True Wear Color Crush Nail Color", "currentPrice": "₹132", "oldPrice": "165", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27380_S3-890100810923_500x.jpg?v=1606469595", "name": "Lakme 9 to 5 Matte Moist Mattifying Moisturiser, 50 g", "currentPrice": "₹349", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteInfinityEyeshadowPalette-SoftNudes_500x.jpg?v=1603535330", "name": "Lakme Absolute Infinity Eye shadow Palette - Soft Nudes", "currentPrice": "₹597", "oldPrice": "995", "discoutPrice": "40% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePerfectRadianceSkinBrighteningSerum-30ml_500x.jpg?v=1598357204", "name": "Lakme Absolute Perfect Radiance Skin Brightening Serum - 30 ml", "currentPrice": "₹799", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9TO5NATURALEALOEVERAGEL_100GM_500x.jpg?v=1598254167", "name": "Lakme 9TO5 NATURALE ALOE VERA GEL, 100 GM", "currentPrice": "₹280", "oldPrice": "350", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpTintedSunscreen50SPF50g_500x.jpg?v=1603467748", "name": "Lakme Sun Exp Tinted Sunscreen 50SPF 50g", "currentPrice": "₹255", "oldPrice": "300", "discoutPrice": "15% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/22749_s1-8901030644900_2_500x.jpg?v=1619170854", "name": "Lakme Absolute Perfect Radiance Skin Brightening Night Creme - 50g", "currentPrice": "₹425", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeBlush_GlowKiwiFreshnessGelFaceWashwithKiwiExtracts_50g_500x.jpg?v=1598361474", "name": "Lakme Blush & Glow Kiwi Freshness Gel Face Wash with Kiwi Extracts, 50 g", "currentPrice": "₹92", "oldPrice": "115", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Hero_0c747456-364d-4f98-aab0-5111711e0605_500x.jpg?v=1601529157", "name": "Lakme 9to5 Naturale Night Creme", "currentPrice": "₹264", "oldPrice": "399", "discoutPrice": "34% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Blush_and_Glow_Pomegranate_Sheet_Mask_500x.jpg?v=1603193636", "name": "Lakme Blush and Glow Pomegranate Sheet Mask", "currentPrice": "₹100", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5PureRougeBlusherPeachAffair_500x.png?v=1598262763", "name": "Lakme 9to5 Pure Rouge Blusher", "currentPrice": "₹400", "oldPrice": "500", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteFaceStylistBlushDuosRoseBlush_500x.png?v=1598335692", "name": "Lakme Absolute Face Stylist Blush Duos", "currentPrice": "₹600", "oldPrice": "750", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteArganOilRadianceOil-in-Creme_500x.jpg?v=1598328603", "name": "Lakme Absolute Argan Oil Radiance Oil-in-Creme", "currentPrice": "₹688", "oldPrice": "860", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/01Mandarino_500x.jpg?v=1607089541", "name": "Lakme Absolute Kohl Ultimate The Gelato Collection", "currentPrice": "₹800", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteArganOilRadianceOvernightOil-in-Serum_500x.jpg?v=1598329334", "name": "Lakme Absolute Argan Oil Radiance Overnight Oil-in-Serum", "currentPrice": "₹975", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27138_H-8901030742101_500x.jpg?v=1591710028", "name": "Lakme Blush and Glow Kiwi Sheet Mask", "currentPrice": "₹100", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertSPF50PA_UltraMatteLotion_100ml_500x.jpg?v=1598361750", "name": "Lakme Sun Expert SPF 50 PA+++ Ultra Matte Lotion, 100 ml", "currentPrice": "₹417", "oldPrice": "490", "discoutPrice": "15% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23552_Hero_img_500x.jpg?v=1603111657", "name": "Lakme Absolute Pore Fix Toner 60 ml", "currentPrice": "₹335", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertUltraMatteGelSunscreenSPF50PA_50ML_500x.jpg?v=1597833192", "name": "Lakme Sun Expert Ultra Matte Gel Sunscreen SPF 50 PA+++ 50 ML", "currentPrice": "₹242", "oldPrice": "285", "discoutPrice": "15% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Absolute_Perfect_Radiance_Skin_Brightening_Light_Creme_50g_500x.jpg?v=1603367330", "name": "Lakme Absolute Perfect Radiance Skin Brightening Light Creme - 50g", "currentPrice": "₹390", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertSPF50PA_UltraMatteLotion_50ml_500x.jpg?v=1598361676", "name": "Lakme  Sun Expert SPF 50 PA+++ Ultra Matte Lotion, 50 ml", "currentPrice": "₹280", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePrecisionEyeArtistEyebrowPencilNaturalBlack_500x.jpg?v=1598359108", "name": "Lakme Absolute Precision Eye Artist Eyebrow Pencil", "currentPrice": "₹480", "oldPrice": "600", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Hero_img_500x.jpg?v=1603111320", "name": "Lakme Peach Milk Soft Crem 150 gm", "currentPrice": "₹199", "oldPrice": "249", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertAfterSunCoolingGel50g_500x.jpg?v=1603467934", "name": "Lakme Sun Expert After Sun Cooling Gel 50 g", "currentPrice": "₹170", "oldPrice": "200", "discoutPrice": "15% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/38423ad27271_s1-8901030752094_500x.jpg?v=1611929129", "name": "Lakme Absolute Hydra Pro Gel Creme", "currentPrice": "₹600", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27141_H-8901030742118_b7869a59-4976-467f-b79e-d53bb87a056e_500x.jpg?v=1629889209", "name": "Lakme Blush and Glow Lemon Sheet Mask", "currentPrice": "₹100", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePerfectRadianceBrighteningFacialFoam_500x.jpg?v=1598355242", "name": "Lakme Absolute Perfect Radiance Brightening Facial Foam", "currentPrice": "₹530", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5EyeColorQuartetEyeShadow-DesertRose_500x.jpg?v=1598251064", "name": "Lakme 9to5 Eye Color Quartet Eye Shadow - Desert Rose", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23895_S1-8901030612114_500x.jpg?v=1599043368", "name": "Lakme Absolute Illuminating Shimmer Brick", "currentPrice": "₹580", "oldPrice": "725", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertSPF50PA_UltraMatteGel100ml_500x.jpg?v=1598361592", "name": "Lakme  Sun Expert SPF 50 PA+++ Ultra Matte Gel 100 ml", "currentPrice": "₹490", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Youth_Infinity_Skin_Firming_Night_Creme_500x.jpg?v=1603875444", "name": "Lakme Youth Infinity Skin Firming Night Creme", "currentPrice": "₹880", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertSPF30PA_UltraMatteLotion_50ml_500x.jpg?v=1598361478", "name": "Lakme  Sun Expert SPF 30 PA++ Ultra Matte Lotion, 50 ml", "currentPrice": "₹235", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteMicroBrowPerfecter_charcoal_500x.jpg?v=1605162150", "name": "Lakme Absolute Micro Brow Perfecter, 0.14 g", "currentPrice": "₹720", "oldPrice": "800", "discoutPrice": "10% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkMoisturizerBodyLotion_500x.jpg?v=1598361157", "name": "Lakme Peach Milk Moisturizer Body Lotion", "currentPrice": "₹319", "oldPrice": "399", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteFlutterSecretsDramaticEyesMascara_500x.jpg?v=1598336256", "name": "Lakme Absolute Flutter Secrets Dramatic Eyes Mascara", "currentPrice": "₹620", "oldPrice": "775", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteBi-PhasedMakeUpRemover_500x.jpg?v=1598335162", "name": "Lakme Absolute Bi-Phased MakeUp Remover", "currentPrice": "₹240", "oldPrice": "300", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteHydraProOvernightGel_500x.jpg?v=1603535213", "name": "Lakme Absolute Hydra Pro Overnight Gel", "currentPrice": "₹725", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePerfectRadianceMineralClayMask_50g_500x.jpg?v=1603535797", "name": "Lakme Absolute Perfect Radiance Mineral Clay Mask, 50 g", "currentPrice": "₹475", "oldPrice": null, "discoutPrice": null, "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1.27308_H-8901030781551_d3bb1014-49d6-41e9-8921-f68d7d9dbf2a_500x.jpg?v=1600872071", "name": "Lakme Peach Milk Ultra Light Gel 150 g", "currentPrice": "₹280", "oldPrice": "350", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Honey_bbbe755a-eb69-48a4-b6ca-cb9c387d6485_500x.jpg?v=1603111992", "name": "Lakme  Absolute White Intense SPF 20 Concealer Stick - 3.6 g", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Hero_Image_with_Swatch_500x.jpg?v=1607334821", "name": "Lakme Abs Argan Oil Radiance Night Revival Eye Creme", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24391_H-MysticNudes_500x.jpg?v=1603356256", "name": "Lakme 9 to 5 Eye Color Quartet Eye Shadow - Mystic Nudes", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5EyeColorQuartetEyeShadow-SmokeyGlam_500x.jpg?v=1597832536", "name": "Lakme 9to5 Eye Color Quartet Eye Shadow - Smokey Glam", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Day-to-Night-Radiance-Kit_1_656b97c6-354c-4f38-99c5-b97f6468df3d_500x.jpg?v=1632115899", "name": "Day to Night Radiance Kit", "currentPrice": "₹1,999", "oldPrice": "2,397", "discoutPrice": "17% off", "isSoldOut": null},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/hero1000x1000-_1_2_500x.jpg?v=1629360499", "name": "Lakme 4 Step Glowing Skin Combo", "currentPrice": "₹999", "oldPrice": "1,219", "discoutPrice": "18% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/All-Day-Radiance-Kit_1000-_1_500x.jpg?v=1632115733", "name": "All Day Radiance Kit", "currentPrice": "₹1,749", "oldPrice": "2,077", "discoutPrice": "16% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Deep-hydration-set_1_de0665bc-74bf-4fd7-9cb3-fdeeac8e2db0_500x.jpg?v=1632115969", "name": "Generation Hydration", "currentPrice": "₹1,699", "oldPrice": "2,197", "discoutPrice": "23% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeEyeconicKajalBlack_500x.jpg?v=1598358347", "name": "Lakme Eyeconic Kajal", "currentPrice": "₹185", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1_f9ee4fac-d206-461a-8f9c-cae7b4cb1a25_500x.jpg?v=1611390381", "name": "Lakme Eyeconic Kajal Twin Pack", "currentPrice": "₹310", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/19722_Hero_image_500x.jpg?v=1603193387", "name": "Lakme Peach Milk Soft Creme 65 gm", "currentPrice": "₹95", "oldPrice": "105", "discoutPrice": "10% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5Primer_MattePowderFoundationIvoryCream_500x.png?v=1598260615", "name": "Lakme 9to5 Primer + Matte Powder Foundation", "currentPrice": "₹460", "oldPrice": "575", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_0f7a4082-72a8-4209-9358-345afbd5a735_500x.jpg?v=1612276565", "name": "Lakme Eyeconic Kajal, Eyeliner & Mascara Combo", "currentPrice": "₹619", "oldPrice": "885", "discoutPrice": "30% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5CCComplexionCareCream_30gmBeige_500x.jpg?v=1598102848", "name": "Lakme 9 to 5 CC Complexion Care Cream, 30gm", "currentPrice": "₹239", "oldPrice": "299", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeBlush_GlowStrawberryFreshnessGelFaceWashwithStrawberryExtracts_50g_11320e3d-5e24-472e-9c85-847fb5294856_500x.jpg?v=1598361583", "name": "Lakme Blush & Glow Strawberry Freshness Gel Face Wash with Strawberry Extracts, 50 g", "currentPrice": "₹84", "oldPrice": "105", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/19326_S1-8901030175084_5ba19bf9-c48a-409f-bd7a-037813457246_500x.jpg?v=1633772950", "name": "Lakme Radiance Complexion Compact", "currentPrice": "₹155", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkMoisturizerBodyLotion60ml_500x.jpg?v=1603467581", "name": "Lakme Peach Milk Moisturizer Body Lotion 60 ml", "currentPrice": "₹79", "oldPrice": "99", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/nail-color-remover_500x.jpg?v=1602152964", "name": "Lakme Nail Color Remover, 27 ml", "currentPrice": "₹95", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Soft_Pink_500x.jpg?v=1603465413", "name": "Lakme Rose Face Powder", "currentPrice": "₹170", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePerfectRadianceCombo_400x-_1_500x.jpg?v=1612276935", "name": "Lakme Absolute Perfect Radiance Combo", "currentPrice": "₹513", "oldPrice": "604", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Marbel_500x.jpg?v=1603188960", "name": "Lakme Perfecting Liquid Foundation", "currentPrice": "₹155", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Pink-Pop-CP1_500x.jpg?v=1602849371", "name": "Lakme 9 to 5 Primer + Creme Lip Color", "currentPrice": "₹400", "oldPrice": "500", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkMoisturizer_500x.jpg?v=1598361317", "name": "Lakme Peach Milk Moisturizer", "currentPrice": "₹159", "oldPrice": "199", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/22362_s1-8901030644832_1_500x.jpg?v=1619159511", "name": "Lakme Absolute Perfect Radiance Day Creme", "currentPrice": "₹299", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Rose-Ivory_500x.jpg?v=1603191610", "name": "Lakme 9 to 5 Weightless Mousse Foundation, 6gm", "currentPrice": "₹128", "oldPrice": "160", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsolutePerfectRadianceFacialKit5x8gm_500x.jpg?v=1598355999", "name": "Lakme Absolute Perfect Radiance Facial Kit 5 x 8 gm", "currentPrice": "₹350", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteKohlUltimate_500x.jpg?v=1598265337", "name": "Lakme Absolute Kohl Ultimate", "currentPrice": "₹563", "oldPrice": "750", "discoutPrice": "25% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/JEWEL-SINDOOR_500x.jpg?v=1633761692", "name": "Lakme Jewel Sindoor", "currentPrice": "₹140", "oldPrice": "155", "discoutPrice": "10% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5FlawlessMatteComplexionCompactAlmond_500x.jpg?v=1628507414", "name": "Lakme 9to5 Flawless Matte Complexion Compact", "currentPrice": "₹425", "oldPrice": "500", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteUndercoverGelPrimer_500x.jpg?v=1598360925", "name": "Lakme Absolute Undercover Gel Primer", "currentPrice": "₹600", "oldPrice": "750", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Sun-Expert_1000x1000px_500x.jpg?v=1567158724", "name": "Lakme Sun Expert SPF 50 Lotion Mini Pack", "currentPrice": "₹84", "oldPrice": "99", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteWhiteIntenseLiquidConcealerIvoryFair_500x.jpg?v=1598361147", "name": "Lakme Absolute White Intense Liquid Concealer", "currentPrice": "₹440", "oldPrice": "550", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Raspberry_500x.jpg?v=1603466665", "name": "Lakme  Lip Love Gelato Collection, 4.5g", "currentPrice": "₹120", "oldPrice": "150", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/21777_Hero_500x.jpg?v=1603199021", "name": "Lakme Peach Milk Intense Moisturizer Lotion, 120 ml", "currentPrice": "₹159", "oldPrice": "190", "discoutPrice": "16% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5NaturaleDayCremeSPF20-50g_500x.jpg?v=1598254736", "name": "Lakme 9to5 Naturale Day Creme SPF 20 - 50g", "currentPrice": "₹260", "oldPrice": "349", "discoutPrice": "26% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkIntenseMoisturizerLotion_60ml_500x.jpg?v=1603467463", "name": "Lakme Peach Milk Intense Moisturizer Lotion, 60 ml", "currentPrice": "₹80", "oldPrice": "100", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24505_S1-8901030751134_500x.jpg?v=1633764871", "name": "Lakme 9to5 Naturale Matte Lipstick", "currentPrice": "₹440", "oldPrice": "550", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5NaturaleGelKajal-Black_500x.jpg?v=1597832632", "name": "Lakme 9to5 Naturale Gel Kajal - Black", "currentPrice": "₹320", "oldPrice": "400", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Kajal_Black_500x.jpg?v=1603366879", "name": "Lakme Kajal-Black", "currentPrice": "₹75", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/21980_H-8901030205125_45bc6383-b212-4d73-95b9-8f0bf0129d6b_2_1_1_500x.jpg?v=1639048800", "name": "Lakme Youth Infinity Skin Firming Day Creme", "currentPrice": "₹850", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkSoftCreme_1_500x.jpg?v=1603196223", "name": "Lakme Peach Milk Soft Creme 250 g", "currentPrice": "₹314", "oldPrice": "349", "discoutPrice": "10% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkMoisturizerSPF24PASunscreenLotion120ml_500x.jpg?v=1598361224", "name": "Lakme Peach Milk Moisturizer SPF 24 PA Sunscreen Lotion 120 ml", "currentPrice": "₹199", "oldPrice": "249", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteArganOilLipColorDrenchedRed_500x.jpg?v=1598278492", "name": "Lakme Absolute Argan Oil Lip Color", "currentPrice": "₹640", "oldPrice": "800", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteBlurPerfectPrimer_500x.jpg?v=1598335297", "name": "Lakme Absolute Blur Perfect Primer", "currentPrice": "₹600", "oldPrice": "750", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/22080_H_6aa59f25-23fe-418d-b5b0-9da4997031c8_500x.jpg?v=1607334873", "name": "Lakme Face Sheer Blusher", "currentPrice": "₹340", "oldPrice": "425", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkMoisturizerBodyLotion200ml_500x.jpg?v=1598360767", "name": "Lakme Peach Milk Moisturizer Body Lotion 200 ml", "currentPrice": "₹260", "oldPrice": "325", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteArganOilRadianceOil-in-Gel_500x.png?v=1603868460", "name": "Lakme Absolute Argan Oil Radiance Oil-in-Gel", "currentPrice": "₹500", "oldPrice": "625", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Blush_and_Glow_Watermelon_Sheet_Mask_500x.jpg?v=1603196042", "name": "Lakme Blush and Glow Watermelon Sheet Mask", "currentPrice": "₹100", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmePeachMilkMoisturizerSPF24PASunscreenLotion120ml_75c450b0-a4f9-4056-83e3-e5940bad6391_500x.jpg?v=1607326290", "name": "Lakme Peach Milk Moisturizer SPF 24 PA Sunscreen Lotion 60 ml", "currentPrice": "₹100", "oldPrice": "125", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertSPF24UltraMatteLotion_120ml_500x.jpg?v=1603468409", "name": "Lakme Sun Expert SPF 24 Ultra Matte Lotion, 120 ml", "currentPrice": "₹302", "oldPrice": "355", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertSPF24UltraMatteLotion_60ml_500x.jpg?v=1603468165", "name": "Lakme Sun Expert SPF 24 Ultra Matte Lotion, 60 ml", "currentPrice": "₹169", "oldPrice": "199", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme-9to5_Naturale_GelMake-up_Remover_500x.jpg?v=1603709832", "name": "Lakme 9to5 Naturale  Gel Make-up Remover", "currentPrice": "₹175", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5NaturaleCCCreamBronze_500x.jpg?v=1598254414", "name": "Lakme 9to5 Naturale CC Cream", "currentPrice": "₹375", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/22581-H_500x.jpg?v=1603464885", "name": "Lakme Sun Expert SPF 30 Ultra Matte Lotion, 100 ml", "currentPrice": "₹327", "oldPrice": "385", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeEyeconicKajalPackof3_500x.jpg?v=1598358137", "name": "Lakme Eyeconic Kajal Pack of 3", "currentPrice": "₹555", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5NaturaleFinishingPowder_500x.jpg?v=1598254883", "name": "Lakme 9to5 Naturale Finishing Powder", "currentPrice": "₹440", "oldPrice": "550", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Face_Magic_Souffle_500x.jpg?v=1603194396", "name": "Lakme Face Magic Souffle", "currentPrice": "₹132", "oldPrice": "165", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23563_S1-8901030542787_500x.jpg?v=1633760347", "name": "Lakme Absolute Gloss Artist Eye Liner - Black", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24810_H1-8901030790010_500x.jpg?v=1604656082", "name": "Lakme Absolute 3D Eye Brow Definer", "currentPrice": "₹640", "oldPrice": "800", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeSunExpertDetanscrub50g_500x.jpg?v=1603468024", "name": "Lakme Sun Expert De tan scrub 50 g", "currentPrice": "₹123", "oldPrice": "145", "discoutPrice": "15% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme_Eyeconic_Liner_Pen_BLock_Tip_1ml_500x.jpg?v=1603360912", "name": "Lakme Eyeconic Liner Pen BLock Tip, 1 ml", "currentPrice": "₹380", "oldPrice": "475", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5FlawlessMakeupFoundationMarble_500x.jpg?v=1598252263", "name": "Lakme 9to5 Flawless Makeup Foundation", "currentPrice": "₹600", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Goldenmedium_500x.jpg?v=1603109229", "name": "Lakme Absolute Skin Cover Foundation", "currentPrice": "₹640", "oldPrice": "800", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Beige_500x.jpg?v=1603202265", "name": "Lakme 9 to 5 CC Color Transform Cream", "currentPrice": "₹399", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteIdealToneRefinishingDayCremeSPF50-30ml_500x.jpg?v=1598264162", "name": "Lakme Absolute Refinishing Day cream", "currentPrice": "₹799", "oldPrice": "999", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/22363_Hero_img_500x.jpg?v=1603188028", "name": "Lakme Absolute Perfect Radiance Skin Lightening UV Lotion 30 ml", "currentPrice": "₹425", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteYouthInfinityCombo_500x.png?v=1598361376", "name": "Lakme Absolute Youth Infinity Combo", "currentPrice": "₹1,730", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23996_S1-8901030644498_500x.jpg?v=1633761318", "name": "Lakme Absolute Forever Silk Lip Liner", "currentPrice": "₹400", "oldPrice": "500", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24639_H_5cd8eebd-843b-4dc5-be1a-b10e4590b168_500x.jpg?v=1607331528", "name": "Lakme  Absolute Argan Oil Radiance Rinse Off Cleansing Oil", "currentPrice": "₹449", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeEyeconicKajalPackof2_500x.jpg?v=1598358091", "name": "Lakme Eyeconic Kajal Pack of 2", "currentPrice": "₹360", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteFlutterSecretsVolumizingMascara-Black_500x.jpg?v=1598336386", "name": "Lakme Absolute Flutter Secrets Volumizing Mascara - Black", "currentPrice": "₹540", "oldPrice": "675", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Bring-on-the-Bright-Kit_1_8767e9ab-4f7f-4d1d-9450-19a1e20abce6_500x.jpg?v=1632115851", "name": "Bring on the Bright Kit", "currentPrice": "₹1,699", "oldPrice": "2,022", "discoutPrice": "16% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5EyeColorQuartetEyeShadow-TanjoreRush_500x.jpg?v=1598251295", "name": "Lakme 9to5 Eye Color Quartet Eye Shadow - Tanjore Rush", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24390_H_Royal_Peacock_500x.jpg?v=1603351736", "name": "Lakme 9 to 5 Eye Color Quartet Eye Shadow - Royal Peacock", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakmeabsolute_500x.jpg?v=1626348790", "name": "Lakme Absolute Illuminating Eye Shadow Palette \u2013 Nude Beach", "currentPrice": "₹796", "oldPrice": "995", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Natural-Pear_500x.jpg?v=1603263260", "name": "Lakme All In One Pan-Cake", "currentPrice": "₹220", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Glow-one-step-further_1_0546f8c9-8506-4296-8a4e-7b4d1b05318e_500x.jpg?v=1632116039", "name": "Lit from within", "currentPrice": "₹1,799", "oldPrice": "2,197", "discoutPrice": "18% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Wrinkle-Warrior-Kit_1_599c6ab5-8ef7-4473-bee9-466f36f94f1e_500x.jpg?v=1632116103", "name": "Restore & Revitalise skin", "currentPrice": "₹1,999", "oldPrice": "2,547", "discoutPrice": "22% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteIdealToneRefinishingNightConcentrate-15ml_500x.jpg?v=1598264686", "name": "Lakme Absolute Ideal Tone Refinishing Night Concentrate - 30ml", "currentPrice": "₹959", "oldPrice": "1,199", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23261_S1-8901030476860_2b722edc-682b-4c61-b828-8422f2ec6450_500x.jpg?v=1633758347", "name": "Lakme 9 to 5 Lip Liner", "currentPrice": "₹340", "oldPrice": "425", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5EyeColorQuartetEyeShadow-SilkRoute_500x.jpg?v=1598251207", "name": "Lakme 9to5 Eye Color Quartet Eye Shadow - Silk Route", "currentPrice": "₹520", "oldPrice": "650", "discoutPrice": "20% off", "isSoldOut": "Sold Out"},
{"image": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteEyeMakeupCombo_500x.jpg?v=1598335476", "name": "Lakme Absolute Eye Makeup Combo", "currentPrice": "₹1,725", "oldPrice": null, "discoutPrice": null, "isSoldOut": "Sold Out"}
]



// document.querySelector("")

productArr.map(function(elm){

productWrapper = document.createElement("div");
productWrapper.setAttribute("class", "productWrapper")

productImage = document.createElement("div");
productImage.setAttribute("class", "productImage");

Image = document.createElement("img");
Image.setAttribute("src",elm.image);

productImage.append(Image);

productDetail = document.createElement("div");
productDetail.setAttribute("class", "productDetail");

productName = document.createElement("p");
productName.setAttribute("class", "productName");

productName.textContent = ele.name;

productPrice = document.createElement("div")
productPrice.setAttribute("class", "productPrice");
productPrice.setAttribute("class", "flex");

currentPrice = document.createElement("p");
currentPrice.setAttribute("class", "currentPrice");
currentPrice.setAttribute("class", "center");

currentPrice.textContent = ele.currentPrice;


oldPrice = document.createElement("p");
oldPrice.setAttribute("class", "oldPrice");
oldPrice.setAttribute("class", "center");

strike = document.createElement("strike");
strike.textContent = ele.oldPrice;

oldPrice.append(strike);
// oldPrice.textContent = ele.oldPrice;

discountPrice = document.createElement("p");
discountPrice.setAttribute("class", "discountPrice");
discountPrice.setAttribute("class", "center");

discountPrice.textContent = ele.discountPrice;

productPrice.append(currentPrice, oldPrice, discountPrice)




cartButton = document.createElement("button")
cartButton.setAttribute("class", "slideRigth");
cartButton.setAttribute("class", "slideButton");


productDetail.append(productName , productPrice,cartButton);

productWrapper.append(productImage,productDetail)

document.querySelector("gride-container").append(productWrapper);

})
