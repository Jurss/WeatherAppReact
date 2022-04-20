export function getBackgroundImage(condition) {
    let result = '';
    switch (condition) {
        case 1000:
            result = 'sunny';
            break;
        case 1003:
        case 1006:
        case 1009:
            result = 'cloudy';
            break;
        case 1030:
        case 1035:
        case 1147:
            result = 'mist';
            break;
        case 1117:
        case 1150:
        case 1168:
        case 1171:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1255:
        case 1258:
        case 1114:
            result = 'snow';
            break;
        case 1153:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1204:
        case 1207:
        case 1240:
        case 1243:
        case 1246:
        case 1249:
        case 1252:
            result = 'rain';
            break;
        case 1237:
        case 1261:
        case 1264:
            result = 'hail';
            break;
        case 1273, 1276, 1279, 1282:
        case 1276:
        case 1279:
        case 1282:
            result = 'thunder';
            break;
        default:
            result = 'sunny';
    }
    return result;
}