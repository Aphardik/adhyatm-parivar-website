"use client"
import { useState, useMemo } from 'react';
import { BiBuilding, BiMapPin, BiPhone, BiSearch } from 'react-icons/bi';

const PratisthanDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data structure based on your format
  const pratisthanData  = {
    'मुंबई': [
      {
        name: 'तुषारभाई शाह',
        area: 'वालक श्वर',
        address: '403 चौथी मंजिल पार्श्व कुंज बाबुलनाथ क्रॉस रोड 2 बॉम्बे इंटरनेशनल स्कूल के बगल में बाबुलनाथ',
        phone: '9020959902',
        city: 'मुंबई 400007'
      },
      {
        name: 'अमितभाई पी. शाह',
        area: 'वालक श्वर',
        address: '501/502, सुलसा अपार्टमेंट, आर.आर. ठक्कर मार्ग, रिज रोड, मालाबार हिल',
        phone: '9819126599',
        city: 'मुंबई-400064'
      },
      {
        name: 'केतनभाई शाह',
        area: 'मुंबई सेंट्रल',
        address: 'फ्लेट नं. 21, 7th फ्लोर, बिल्डिंग नंबर 4, नवजीवन सोसायटी, लमिंग्टन रोड',
        phone: '9867711405, 9223373654',
        city: 'मुंबई – 400008'
      },
      {
        name: 'किरणभाई मोरा',
        area: 'कालबादेवी',
        address: 'C/o. पारस मेटल शॉप नं. 90, कंसारा चाल, कालबादेवी रोड',
        phone: '022 22422868, 9820228920',
        city: 'मुंबई'
      },
      {
        name: 'गौतमभाई शाह',
        area: 'भूलेश्वर',
        address: 'कंदोली नगर, 3rd फ्लोर, रूम नं. 305, भूलेश्वर, पांजरापोल',
        phone: '7977412756',
        city: 'मुंबई – 400002'
      },
      {
        name: 'श्री हृदयभाई शाह',
        area: 'भूलेश्वर',
        address: 'आर.एन.9 प्रथम तल, बोडी बंगला, पहला पंजरापोल लेन, 89 सी.पी.टैंक रोड, चर्नी रोड',
        phone: '7984689463',
        city: 'मुंबई - 400002'
      },
      {
        name: 'राहुलभाई मेहता',
        area: 'प्रार्थना समाज',
        address: '102/B, पारख वाडी, 5th फ्लोर, V. P. रोड, प्रार्थना समाज',
        phone: '9833671270, 9321657024',
        city: 'मुंबई – 400004'
      },
      {
        name: 'श्री अल्पेशभाई बुराड',
        area: 'गिरगांव',
        address: 'नमन पाइप और ट्यूब दुकान नंबर- 2, 15 विमल दर्शन 9वीं खेतवाडी लेन, गिरगांव',
        phone: '9004096535',
        city: 'मुंबई-400004'
      },
      {
        name: 'मांगीलालजी चंदन',
        area: 'कुंभारवाडा',
        address: 'नवरंग स्टील, 145, 2nd कुंभारवाडा',
        phone: '9820353565',
        city: 'मुंबई – 400004'
      },
      {
        name: 'रूपेशभाई सावला',
        area: 'दादर (पू)',
        address: 'सावला इन्टरनेशनल, 16 रॉयल टास्क, भवानी शंकर रोड, शैतान चौकी पुलिस स्टेशन के पास',
        phone: '9320085800',
        city: 'दादर (पू), मुंबई'
      },
      {
        name: 'हितेशभाई',
        area: 'BKC',
        address: 'CW – 1160, भारत डायमंड बर्स (BDB), BKC, बांद्रा (पूर्व)',
        phone: '9819926359, 022-33928603',
        city: 'मुंबई'
      },
      {
        name: 'मयूरभाई',
        area: 'BKC',
        address: 'DW – 1290, भारत डायमंड बर्स (BDB), BKC, बांद्रा (पूर्व)',
        phone: '9820157843',
        city: 'मुंबई'
      },
      {
        name: 'दीपकभाई शाह',
        area: 'BKC',
        address: 'तरंग डायमंड्स, FW-4041, भारत डायमंड बर्स (BDB), BKC, बांद्रा (पूर्व)',
        phone: '75062 76175',
        city: 'मुंबई'
      },
      {
        name: 'निखिलभाई शेठ',
        area: 'BKC',
        address: 'FC-37, भारत डायमंड बर्स (BDB), BKC, बांद्रा (पूर्व)',
        phone: '9820288018',
        city: 'मुंबई'
      },
      {
        name: 'जिग्नेशभाई',
        area: 'अंधेरी (पू)',
        address: '401, भूमि गणेश भुवन, श्री चंद्रप्रभ स्वामी जैन मंदिर के बगल में, साउथ पॉन्ड रोड, एम.एल. के सामने अंतरिक्ष भवन, विले पार्ले - पश्चिम',
        phone: '9821086110, 8169212367',
        city: 'मुंबई - 400056'
      },
      {
        name: 'प्रग्नेशभाई',
        area: 'गोरेगांव (प)',
        address: '703, सरस्वती भुवन रोड नंबर 14, जवाहर नगर आई बी पटेल स्कूल के पास, गोरेगांव पश्चिम',
        phone: '9820999494',
        city: 'मुंबई'
      },
      {
        name: 'राजुभाई मोरखिया',
        area: 'गोरेगांव (प)',
        address: 'गजानन कॉलोनी नं. 9, रूम नं. 2, जवाहर नगर',
        phone: '9892354014, 9029298248',
        city: 'गोरेगांव (प), मुंबई'
      },
      {
        name: 'सिद्धार्थभाई मुनानी',
        area: 'गोरेगांव (प)',
        address: '403, जगत मेहल, श्रीनगर सोसायटी, एम. जी. रोड',
        phone: '9769912614',
        city: 'गोरेगांव (प), मुंबई – 400104'
      },
      {
        name: 'योगेशभाई शाह',
        area: 'मलाड (पू)',
        address: 'शॉप नं. 2, नवडियादवाला हॉल के नीचे, पोद्दार रोड, एस. एम. लाल कॉलेज के पास',
        phone: '8879711677',
        city: 'मलाड (पू), मुंबई'
      },
      {
        name: 'पारसभाई मोदी',
        area: 'मलाड (पू)',
        address: 'A-902, बिल्डिंग नं. 2, के. डी. राइट्स, लक्ष्मी नारायण मंदिर के पास, रानीसती मार्ग, कठियावाडी चोक',
        phone: '9022728062',
        city: 'मलाड (पू), मुंबई'
      },
      {
        name: 'अजितभाई मदनलाल',
        area: 'मलाड (पू)',
        address: '502/503, पार्थ रेसिडेंसी, पुष्पा पार्क, रोड नं. -1, आशा हॉस्पिटल के पास',
        phone: '9167301172',
        city: 'मलाड (पू), मुंबई'
      },
      {
        name: 'परेशभाई एन. शाह',
        area: 'मलाड (पू)',
        address: 'फ्लेट नं. 201/202, 2nd फ्लोर, रेंस टॉप इन टाउन सी एच एस, कदारमल रोड',
        phone: '9819092861',
        city: 'मलाड (पू), मुंबई'
      },
      {
        name: 'भावेशभाई वोरा',
        area: 'मलाड (प)',
        address: '202, C-विंग, सद्गुरु अपार्टमेंट, ICICI बैंक के ऊपर, जलवायु गार्डन',
        phone: '9820467626',
        city: 'मलाड (प), मुंबई'
      },
      {
        name: 'चिरागभाई सिवंतलाल शाह',
        area: 'मलाड (व)',
        address: '502, गिरि अपार्टमेंट, आदर्श लेन, मावे रोड, मलाड वेस्ट',
        phone: '9819569035, 8369116393',
        city: 'मुंबई – 400064'
      },
      {
        name: 'भद्रेशभाई',
        area: 'कांदिवली (प)',
        address: 'A-601, लुईस प्लेस, शंकर गली, स्काई राइ टावर के सामने',
        phone: '9821268112',
        city: 'कांदिवली (प), मुंबई'
      },
      {
        name: 'अध्यात्म परिवार कार्यालय',
        area: 'कांदिवली (प)',
        address: 'संभव दर्शन, ग्राउंड फ्लोर, रमुकलानी मेन रोड, ईरानी वाडी',
        phone: '8448444050',
        city: 'कांदिवली (प), मुंबई–400067'
      },
      {
        name: 'श्री हरिनभाई वी शाह',
        area: 'मलाड (पश्चिम)',
        address: 'ए/24, 5वीं मंजिल, रोल्क्स अपार्टमेंट, न्यू एरा सिग्नल और अदिति होटल के पास, एस.वी.रोड',
        phone: '9867414098',
        city: 'मलाड (पश्चिम) मुंबई-400064'
      },
      {
        name: 'रोहितभाई वोरा',
        area: 'बोरीवली (प)',
        address: 'D-104, साई दर्शन बिल्डिंग, मूलजीनगर के सामने, रामबाग लेन, S. V. रोड',
        phone: '9920970054, 7021276483',
        city: 'बोरीवली (प), मुंबई'
      },
      {
        name: 'मणिपालभाई',
        area: 'बोरीवली (प)',
        address: '203/92, ब्लू व्यू, सोडावाला लेन, स्टर्लिंग हॉस्पिटल के पास',
        phone: '9920197919, 9321665444',
        city: 'बोरीवली (प), मुंबई'
      },
      {
        name: 'धर्मेशभाई मोदी',
        area: 'बोरीवली (पू)',
        address: 'C/303, रॉयल गार्डन, कार्टर रोड नं. 2',
        phone: '7666335635, 9867630232',
        city: 'बोरीवली (पू), मुंबई'
      },
      {
        name: 'श्री विपुलभाई',
        area: 'बोरीवली (प)',
        address: 'फ्लैट नंबर 301, शिवालय भवन, एबव एयू स्मॉल फाइनेंस बैंक चंदावरकर रोड',
        phone: '9819928899',
        city: 'बोरीवली पश्चिम मुंबई-400092'
      },
      {
        name: 'सुरेशभाई सावला',
        area: 'मीरा रोड (पू)',
        address: 'C/o. लक्ष्मी प्लाजा, A-12, सेक्टर 4, शांतिनगर, जैन मंदिर के सामने',
        phone: '9820938399',
        city: 'मीरा रोड (पू), मुंबई-401107'
      },
      {
        name: 'विमलभाई',
        area: 'मीरा रोड (पू)',
        address: 'A-204, विनयदर्शन, प्लेसेंट पार्क के सामने, मीरा भायंदर रोड',
        phone: '9769939899, 8779027301',
        city: 'मीरा रोड (पू), मुंबई'
      },
      {
        name: 'वस्तुपाल एल. जैन',
        area: 'भायंदर (प)',
        address: 'B-207, सलासर शक्ति, वेंकटेश पार्क',
        phone: '8767670525',
        city: 'भायंदर (प), मुंबई'
      },
      {
        name: 'मोहनलाल कस्तूरचंदजी जैन',
        area: 'भायंदर (प)',
        address: 'A-403, जानकी रेसिडेंसी बिल्डिंग, 150 ft रोड, मैक्सस मॉल के सामने, तीना मेहता कॉलेज के पास',
        phone: '9833051853',
        city: 'भायंदर (प), मुंबई'
      },
      {
        name: 'जिग्नेशभाई शाह',
        area: 'भायंदर (प)',
        address: 'संगम अपार्टमेंट नं. 1, B-208, शिवसेना गली',
        phone: '9821165687',
        city: 'भायंदर (प), मुंबई'
      },
      {
        name: 'कलिभाई पिंकेशभाई शाह',
        area: 'भायंदर (प)',
        address: 'D/112, शुभ बिल्डिंग, श्रद्धा कॉम्प्लेक्स, 60 ft. रोड',
        phone: '7208689939',
        city: 'भायंदर (प), मुंबई'
      },
      {
        name: 'धवलभाई अश्विनभाई शाह',
        area: 'भायंदर (प)',
        address: 'C-10, महावीर अपार्टमेंट, भाजी मार्केट, बॉम्बे मार्केट के सामने, स्टेशन रोड',
        phone: '9082861006, 9664875931',
        city: 'भायंदर (प), मुंबई'
      },
      {
        name: 'विजय कुमार',
        area: 'ठाणे',
        address: 'कोठारीवल्लभ कृपा बिल्डिंग 503 पांचवा मंजिल गली जैन मंदिर के पास ठाणे वेस्ट',
        phone: '8169407745, 9892263076',
        city: 'ठाणे 400601'
      },
      {
        name: 'हार्दिकभाई सोत्तावन',
        area: 'भायखला',
        address: 'रूम नंबर 502, 5th फ्लोर, आनंद एपार्टमेंट, मोतिशा क्रॉस लेन, लव लेन',
        phone: '9049020109',
        city: 'भायखला, मुंबई - 400027'
      },
      {
        name: 'खिलांदीभाई',
        area: 'भिवंडी',
        address: '1610, आयुष रेसिडेंसी, 1st फ्लोर, 103, कल्पतरु गार्डन के सामने, कामठकर रोड',
        phone: '9766888329',
        city: 'भिवंडी, मुंबई'
      },
      {
        name: 'प्रकाशभाई',
        area: 'बदलापुर',
        address: 'A/12, गुरुराज अपार्टमेंट, राजन गोपाल ऑफिस के ऊपर, चंद्रपाडा',
        phone: '9324415229',
        city: 'बदलापुर (वेस्ट), मुंबई – 421503'
      },
      {
        name: 'श्रीपालभाई मेहता',
        area: 'घाटकोपर',
        address: 'शॉप नं. 5, लील निवास, तिलक रोड',
        phone: '9819833922',
        city: 'घाटकोपर (पू), मुंबई'
      },
      {
        name: 'अर्पितभाई',
        area: 'मुलुंड (प)',
        address: '201 जिस्सू सदन, गौशाला रोड',
        phone: '7718896679, 9969859046',
        city: 'मुलुंड (प) मुंबई'
      },
      {
        name: 'बंकिमभाई रमेशभाई जैन',
        area: 'भायखला',
        address: '508/B, शत्रुंजय दर्शन, मोतिशा क्रॉस लेन',
        phone: '9987606617',
        city: 'भायखला, मुंबई - 400027'
      }
    ],
    'सूरत': [
      {
        name: 'श्री शांतिवर्धक जैन संघ',
        area: 'पाल',
        address: 'तीसरा मंजिल, अध्यात्म भवन, आनंद श्रावक आराधना भवन, संजीवकुमार ऑडिटोरियम के पास',
        phone: '7676769600, 7600090208',
        city: 'पाल, सूरत - 395009'
      },
      {
        name: 'हिरेनभाई',
        area: 'पाल',
        address: 'A-304, सुमेरु रेसिडेंसी, L.P. सवानी रोड, शेल पेट्रोल पंप के पास',
        phone: '9909437603',
        city: 'पाल, सूरत - 395009'
      },
      {
        name: 'मयूरभाई शाह',
        area: 'पाल',
        address: 'A-1003, भाग्यरत्न राइट्स, निशाल सर्कल के पास',
        phone: '7383081470',
        city: 'पाल, सूरत - 395009'
      },
      {
        name: 'प्रतिकभाई',
        area: 'अडाजण',
        address: 'C-708, रिवर राइट्स, सरिता सागर संकुल के सामने, मकाई पुल के पास',
        phone: '8733092378',
        city: 'अडाजण, सूरत'
      },
      {
        name: 'कल्पेशभाई',
        area: 'अडाजण',
        address: 'D-304, शंख श्वर कॉम्प्लेक्स, SMC हॉल के सामने, सूर्यपुर सोसायटी के सामने, ऋषभ चार रास्ता',
        phone: '9819417434',
        city: 'अडाजण, सूरत'
      },
      {
        name: 'हर्षभाई कोठारी',
        area: 'अडाजण',
        address: 'A-307, शत्रुंजय टावर, नवयुग कॉलेज के पास, रांदेर रोड',
        phone: '8866507829',
        city: 'अडाजण, सूरत'
      },
      {
        name: 'शैलेशभाई छोटालाल असारा',
        area: 'कतारगाम',
        address: 'B-304, अयोध्यापुरम अपार्टमेंट, करणफलिया, जैन देरासर के पास',
        phone: '9898269519',
        city: 'कतारगाम, सूरत'
      },
      {
        name: 'श्री शांति कनक जैन संघ',
        area: 'नानपुरा',
        address: 'नानपुरा, कदम्भभवन के सामने, कदरसा की नाड',
        phone: '0261-2469191, 9909437365',
        city: 'सूरत - 395001'
      },
      {
        name: 'प्रदीपभाई परमार',
        area: 'कैलाशनगर',
        address: 'B-402, राश रेसिडेंसी, आनंद नगर, संग्रामपुरा, कैलाशनगर के पास',
        phone: '8141271702',
        city: 'सूरत – 395002'
      },
      {
        name: 'अभिषेकभाई मेहता',
        area: 'अठवालाईन्स',
        address: '203, नम्रता अपार्टमेंट, पाँच पांडव बंगलो गली, अंजन शलाका बिल्डिंग के पीछे',
        phone: '9825111601',
        city: 'अठवालाईन्स, सूरत'
      },
      {
        name: 'नीलेशभाई ललितभाई अजबानी',
        area: 'वेसु',
        address: '501 - A, रिवोली राइट्स, फ्लोरेंस के सामने, VIP रोड',
        phone: '9374955101',
        city: 'वेसु, सूरत'
      },
      {
        name: 'नीलेशभाई रतिलाल शाह',
        area: 'वेसु',
        address: '1202- A, रिवोली राइट्स, फ्लोरेंस के सामने, VIP रोड',
        phone: '9426772826',
        city: 'वेसु, सूरत'
      },
      {
        name: 'किरणभाई/मनीषभाई',
        area: 'मजिधरपुरा',
        address: '101, राजकृपा बिल्डिंग, L. B. चार रास्ता',
        phone: '9825179399, 9428142547',
        city: 'मजिधरपुरा, सूरत'
      },
      {
        name: 'विध्युतभाई ज. शाह',
        area: 'घोडदोड रोड',
        address: 'A/702, स्मिता पार्क, सरलावडी, सरला शॉपिंग सेंटर के पीछे',
        phone: '9825193744',
        city: 'घोडदोड रोड, सूरत – 395007'
      },
      {
        name: 'क्रिशभाई शाह',
        area: 'मजिधरपुरा',
        address: '6/789-90, कोमल बिल्डिंग छाप्रिया श्री जैन देरासर मेन रोड',
        phone: '6352236463',
        city: 'मजिधरपुरा, सूरत - 395003'
      },
      {
        name: 'श्रीपालबाई कोठारी',
        area: 'वेसु',
        address: '201 बार विलासिता एप ब्लास्ट कैनाल रोड',
        phone: '9879663450',
        city: 'सूरत 395007'
      },
      {
        name: 'धर्मेशभाई एच मेहता',
        area: 'वेसु',
        address: 'बी-302 वेस्टर्न रेसिडेंसी ऑप. सिडी जैन स्कूल नियर जी अंबानी स्कूल',
        phone: '9727336622',
        city: 'वेसु सूरत'
      },
      {
        name: 'संविगभाई किरीट भाई दोषी',
        area: 'वेसु',
        address: 'A-204 ग्रीन लीफ ऑप सिलिवेरी ग्रीन',
        phone: '9712628053',
        city: 'वेसु सूरत'
      },
      {
        name: 'श्री पिंकूभाई सांवला',
        area: 'मजिधरपुरा',
        address: 'A-302 वर्षालाल अपार्टमेंट भोजभाई नी शेरी',
        phone: '7048209000',
        city: 'मजिधरपुरा सूरत – 395003'
      },
    ]
}

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return pratisthanData;

    const filtered = {};
    Object.keys(pratisthanData).forEach(city => {
      const filteredEntries = pratisthanData[city].filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.phone.includes(searchTerm) ||
        entry.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredEntries.length > 0) {
        filtered[city] = filteredEntries;
      }
    });
    return filtered;
  }, [searchTerm]);

  const PratisthanCard = ({ entry }) => (
    <div className="bg-white border border-gray-300 p-6 font-body hover:bg-gray-50 transition-colors">
      <div className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold text-black">{entry.name}</h3>
        
        <div className="flex items-start space-x-2">
          <BiBuilding className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
          <span className="text-gray-700 font-medium">{entry.area}</span>
        </div>
        
        <div className="flex items-start space-x-2">
          <BiMapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
          <div className="text-gray-700">
            <p className="mb-1">{entry.address}</p>
            <p className="font-medium">{entry.city}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <BiPhone className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <a 
            href={`tel:${entry.phone}`}
            className="text-blue-600 font-medium hover:underline"
          >
            {entry.phone}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-8">
      {/* Header */}
      <div className="bg-gray-100 border shadow-md border-gray-300 sticky mb-8 top-16 z-10">
        <div className="max-w-7xl flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between mx-auto px-4 py-6">
          <h1 className="text-3xl font-heading font-bold text-gray-800 text-center">
            शुद्धद्रव्य प्राप्तिस्थान
          </h1>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-3xl rounded-3xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="नाम, फोन, पता, या शहर से खोजें..."
              className="w-full placeholder:font-body bg-white placeholder:text-gray-400 pl-10 pr-4 py-3 text-lg border rounded-4xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700/60 focus:border-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {Object.keys(filteredData).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">no praptisthan</p>
          </div>
        ) : (
          Object.keys(filteredData).map(city => (
            <div key={city} className="mb-12">
              {/* City Header */}
              <div className="mb-6 text-gray-200 bg-cyan-800">
                <h2 className="text-xl sm:text-2xl font-heading  px-4 py-2 inline-block">
                  {city} - {filteredData[city].length} शुद्धद्रव्य प्राप्तिस्थान
                </h2>
               
              </div>
              
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData[city].map((entry, index) => (
                  <PratisthanCard key={index} entry={entry} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t-2 border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 font-heading text-center text-gray-600">
          <p>कुल {Object.values(filteredData).reduce((sum, entries) => sum + entries.length, 0)} शुद्धद्रव्य प्राप्तिस्थान</p>
        </div>
      </div>
    </div>
  );
};

export default PratisthanDirectory;