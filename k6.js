import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10,
  duration: "30s"
};
export default function() {
  let res = http.get("http://localhost:3001/moist-air/game/?id=9000000");
  check(res, {
    "success": (r) => r.status == 200
  });
  var id = 2585000002
  var url = 'http://localhost:3001/moist-air/game';
  var game = JSON.stringify({
    "id": Math.floor(Math.random()* 700000000) + 20000000,
    "titleCover": "https://s3.us-east-2.amazonaws.com/images.for.hrr/header.jpg",
    "title": "The grateful Dead",
    "price": "$100.00",
    "aboutInfo": "hampton Coliseum, Hampton, Va 3/27/88",
    "requirements": "{&os&: &Windows XP&,&processor&: &Dual Core 1.8 Ghz&, &memory&: &2 GB RAM&,&graphics&: &512 Mb&,&directX&: &Version 9.0&,&storage&: &900 MB available space&}",
    "genre": "cats,adventure,hello,kitty,racing",
    "developer": "bethesda",
    "publisher": "bioware",
    "releaseDate": "hopefully never",
    "steamAcheivments": "https://s3.us-east-2.amazonaws.com/images.for.hrr/869-100x100.jpg,https://s3.us-east-2.amazonaws.com/images.for.hrr/818-100x100.jpg,https://s3.us-east-2.amazonaws.com/images.for.hrr/612-100x100.jpg",
    "languages": "{&languageName&: &English&,&interface&: true,&fullAudio&: false,&subtitles&: false}*{&languageName&: &Lebanese&,&interface&: true,&fullAudio&: false,&subtitles&: false}*{ &languageName&: &SwampTounge&,&interface&: true,&fullAudio&: false,&subtitles&: false }*{ &languageName&: &Japanese&,&interface&: true,&fullAudio&: false,&subtitles&: false}*{ &languageName&: &Indian&, &interface&: true, &fullAudio&: false,&subtitles&: false}",
    "attributes": "{&achievements&: &true&,&partialControllersupport&: &true&,&remotePlay&: &true&}",
    "moreLikeThis": "{&titleImage&: &https://s3.us-east-2.amazonaws.com/images.for.hrr/869-100x100.jpg&, &price&: &$19.99&}*{&titleImage&: &https://s3.us-east-2.amazonaws.com images.for.hrr/818-100x100.jpg&,&price&: &$19.99&}*{&titleImage&: &https://s3.us-east-2.amazonaws.com/images.for.hrr/612-100x100.jpg&,&price&: &$15.99&}"
});
  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  http.post(url, game, params);

};