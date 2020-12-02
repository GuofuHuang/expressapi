var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('mock');
});

router.get('/11/channel', function(req, res) {
  let channel = {"status":100,"msg":"success","data":{"results":[{"id":"Ac722Cb1-Ee8B-1fc3-244b-D77cB5b65B5B","image":"http://39.105.213.120/thumbnail/35.jpg","remark":"fugiat dolore elit","title":"体率系采现三","playing":884,"played":68},{"id":"eB4e8CdC-255F-3db5-bc8A-B5DD6eDDD191","image":"http://39.105.213.120/thumbnail/23.jpg","remark":"nostrud Excepteur in mollit ut","title":"些选铁广的时","playing":689,"played":703},{"id":"Db7ffe64-1fDe-BbB6-C34C-F552DBbFfa72","image":"http://39.105.213.120/thumbnail/3.jpg","remark":"mollit ut elit ad magna","title":"起们值十支水","playing":836,"played":945},{"id":"60E25AcF-5ca7-1C17-b1d6-47e3b95255bd","image":"http://39.105.213.120/thumbnail/25.jpg","remark":"dolor","title":"联化或","playing":17,"played":597},{"id":"AEBf4AFE-1d1A-AEBE-Ec3B-F3db3c15D4B9","image":"http://39.105.213.120/thumbnail/10.jpg","remark":"sed in labore magna","title":"听群路件却对","playing":675,"played":519},{"id":"ACd5Ece8-b7eE-dcF8-eCB3-EcDe7A5e2a1b","image":"http://39.105.213.120/thumbnail/24.jpg","remark":"esse","title":"光求什","playing":727,"played":264},{"id":"a245869E-Ac33-eAC4-c4ee-41846445Affc","image":"http://39.105.213.120/thumbnail/12.jpg","remark":"minim nostrud","title":"长员据他世级","playing":365,"played":893},{"id":"5F9DDa5D-D224-CAAB-dd9A-EbDBB394c3D2","image":"http://39.105.213.120/thumbnail/12.jpg","remark":"nostrud quis","title":"志广记治带风等","playing":447,"played":986},{"id":"3F21Bd33-5B4C-B3B9-34C3-2cF32e61bB4f","image":"http://39.105.213.120/thumbnail/53.jpg","remark":"magna non","title":"常法团支数","playing":800,"played":495},{"id":"e34f6FD7-4D9C-7F70-147e-8756CCD997bE","image":"http://39.105.213.120/thumbnail/17.jpg","remark":"irure","title":"场毛度着件如","playing":641,"played":856}],"pagination":{"current":1,"total":20}}}

  res.send(channel);
});
router.get('/11/category', function(req, res) {

  let result = {
    "status": 100,
    "msg": "success",
    "data": [
    {
      "id": "220000197712138212",
      "image": "http://39.105.213.120/images/21.jpg",
      "colors": [
        "#f2ce79",
        "#aa79f2"
      ]
    },
    {
      "id": "450000200807266855",
      "image": "http://39.105.213.120/images/21.jpg",
      "colors": [
        "#79f287",
        "#f2798e"
      ]
    }
  ]
  }

  res.send(result);
});
router.get('/11/carousel', function(req, res) {
  let carousel = {"status":100,"msg":"success","data":[{"id":"51000020200327322X","image":"http://39.105.213.120/images/18.jpg","colors":["#79f29a","#f2797b"]},{"id":"530000201303167137","image":"http://39.105.213.120/images/26.jpg","colors":["#799ef2","#c1f279"]},{"id":"330000201202230523","image":"http://39.105.213.120/images/54.jpg","colors":["#f279e5","#79f2dc"]},{"id":"320000199004199228","image":"http://39.105.213.120/images/40.jpg","colors":["#f2b879","#9579f2"]}]};
  res.send(carousel);
});

module.exports = router;
