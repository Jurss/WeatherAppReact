export function getBackgroundImage(condition) {
    let result = '';
    switch (condition) {
        case 1000:
            result = 'sunny';
            break;
        case 1003, 1006, 1009:
            result = 'cloudy';
            break;
        case 1030, 1035, 1147:
            result = 'mist';
            break;
        case 1114, 1117, 1150, 1168, 1171, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258:
            result = 'snow';
            break;
        case 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1207, 1240, 1243, 1246, 1249, 1252:
            result = 'rain';
            break;
        case 1237, 1261, 1264:
            result = 'hail';
            break;
        case 1273, 1276, 1279, 1282:
            result = 'thunder';
            break;
        default:
            result = 'sunny';
            break;
    }
    return result;
}