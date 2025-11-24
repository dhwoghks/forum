export default function handler(요청, 응답){
    if (요청.method == 'GET'){
        응답.status(200).json('ㅁㄴㅇㄹ')
    }
    if (요청.method == 'POST'){
        응답.status(200).json('ㅁㄴㅇㄹ')
    }
}