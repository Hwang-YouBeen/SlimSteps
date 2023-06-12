function calculateCalorieIntake() {
    $('h4:nth-child(1)').text("* 추천식단은 권장 섭취량 결과에 따라 제공됩니다 *")
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = parseInt(document.getElementById("age").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var bmr;
    if (gender === "남성") {
        bmr = 66 + (13.75 * weight) + (5 * height) - (6.8 * age);
    } else {
        bmr = 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }

    var activityLevel = parseInt(document.getElementById("activityLevel").value);
    var calorieIntake;
    switch (activityLevel) {
        case 1:
            calorieIntake = bmr * 1.2;
            break;
        case 2:
            calorieIntake = bmr * 1.375;
            break;
        case 3:
            calorieIntake = bmr * 1.55;
            break;
        case 4:
            calorieIntake = bmr * 1.725;
            break;
        case 5:
            calorieIntake = bmr * 1.9;
            break;
        default:
            calorieIntake = bmr;
    }

    var diet;
    if (calorieIntake < 1500) {
        diet = "아침:<br>김밥 (200kcal)<br>두부조림 (100kcal)<br><br>점심:<br>비빔밥 (300kcal)<br>미역국 (100kcal)<br><br>저녁:<br>된장찌개 (200kcal)<br>고등어구이 (150kcal)<br>김치 (50kcal)";
    } else if (calorieIntake >= 1500 && calorieIntake < 1800) {
        diet = "아침:<br>콩나물국밥 (300kcal)<br>계란말이 (150kcal)<br><br>점심:<br>잔치국수 (400kcal)<br>군만두 (150kcal)<br><br>저녁:<br>제육볶음 (300kcal)<br>야채전 (150kcal)<br>무생채 (100kcal)";
    } else if (calorieIntake >= 1800 && calorieIntake < 2100) {
        diet = "아침:<br>미역국과 김치볶음밥 (400kcal)<br>오이소박이 (100kcal)<br><br>점심:<br>갈비찜 (500kcal)<br>떡볶이 (200kcal)<br><br>저녁:<br>돼지고기 된장찌개 (400kcal)<br>해물파전 (200kcal)<br>시금치나물 (100kcal)";
    } else {
        diet = "아침:<br>불고기덮밥 (500kcal)<br>계란국 (150kcal)<br><br>점심:<br>곰탕 (600kcal)<br>해물순두부찌개 (300kcal)<br><br>저녁:<br>잡채 (500kcal)<br>감자조림 (200kcal)<br>콩나물무침 (100kcal)";
    }
    
    document.getElementById("result").innerHTML = "Result: " + calorieIntake.toFixed(2) + " kcal";
    document.getElementById("diet").innerHTML =  diet;
    //document.getElementById("diet2").innerHTML =  diet2;
}

