/******************************


[rewrite_local]
^https:\/\/\.*\.ksedt\.com\/.+ url script-request-headers; jx1.js
[mitm] 
hostname = *.ksedt.com



*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = 'cityid=209; hpincode=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJjbGllbnRJcFwiOlwiMzYuMTM0LjEyNy4xNjVcIixcImRldmljZUlkXCI6XCI0ZWU0ZGUwMGRkODA0MmU2OTY1ZjQ3ZmFhNmI5YjE4NFwiLFwiaW1laVwiOlwiZjQ2MGZjMTFiNzliMWNmOTE0ZWU0M2UxMjNmYWUxMTczOTMyMTVhMlwiLFwianhJZFwiOjAsXCJsb2dpblRpbWVcIjoxNzE1MjcwMzcyNTM2LFwidXNlcmlkXCI6MzY1NTYyNjA5MTc3OTg1MDQ2OX0iLCJpc3MiOiJKWEVEVCIsImV4cCI6MTc0NjM3NDM3MiwiaWF0IjoxNzE1MjcwMzcxfQ.UCIke2VyRa5RfIZES-qa8-5H-ewnJXWHhRiJph9qABp1nf7mevEZWMMrdPsYYBv0DBcSizS4lmUicAaKCeRqfQ; userid=3655626091779850469; cversion="15.4.1"; id58=CocGRmY87b4jm+KcFrNxAg==';


modifiedHeaders['hpincode'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJjbGllbnRJcFwiOlwiMzYuMTM0LjEyNy4xNjVcIixcImRldmljZUlkXCI6XCI0ZWU0ZGUwMGRkODA0MmU2OTY1ZjQ3ZmFhNmI5YjE4NFwiLFwiaW1laVwiOlwiZjQ2MGZjMTFiNzliMWNmOTE0ZWU0M2UxMjNmYWUxMTczOTMyMTVhMlwiLFwianhJZFwiOjAsXCJsb2dpblRpbWVcIjoxNzE1MjcwMzcyNTM2LFwidXNlcmlkXCI6MzY1NTYyNjA5MTc3OTg1MDQ2OX0iLCJpc3MiOiJKWEVEVCIsImV4cCI6MTc0NjM3NDM3MiwiaWF0IjoxNzE1MjcwMzcxfQ.UCIke2VyRa5RfIZES-qa8-5H-ewnJXWHhRiJph9qABp1nf7mevEZWMMrdPsYYBv0DBcSizS4lmUicAaKCeRqfQ';

modifiedHeaders['hext-union'] = '-4sJuHstzwHGlheXh5Vet8H4AotqS_fUnMpjXHKN_oqAg5b_bA948jbwEHaxApCa1EQyd4ZtZqYgPJEfuDAn-V_wQtFbaC9d2uEoFEmlj6-aNkCQtZcQn_2ag8USkL8dTv-FIGC3K7hkCgMI4XcDZlznbLVMA7L2ip-cIOKpdV0K3Zk2-IXRzEl3S5XTElmJDBkktnHkBQZ2i1ZYWGvK1-ZRqxGWPEhUsMHQKO5w3t7CODOprpcM3MBNBO0TmFLTGr84-TUbp_N7urs9_AVs3QHYbEGiblGCN3rBs3bX1cX7bsMMxqwNx8UEYgNJCrca';

$done({headers : modifiedHeaders});
