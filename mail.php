<?php
if($_POST){
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $city = $_POST['city'];
    $deliveryWay = $_POST['deliveryWay'];
    $deliveryType = $_POST['deliveryType'];
    $deliveryDay = $_POST['deliveryDay'];
    $deliveryTime = $_POST['deliveryTime'];
    $address = $_POST['address'];
    $boxberryAddress = $_POST['boxberryAddress'];

    $pickedSize = $_POST['pickedSize'];
    $pickedSex = $_POST['pickedSex'];
    $signInput = $_POST['signInput'];
    $pickedFont = $_POST['pickedFont'];
    $pickedBathrobeColor = $_POST['pickedBathrobeColor'];
    $pickedImage = $_POST['pickedImage'];

    $message = "
    Информация о клиенте
    ФИО: $name
    Номер телефона: $phone
    Электронная почта: $email
    
    Информация о доставке
    Город: $city
    Способ получения: $deliveryWay
    Тип доставки: $deliveryType
    Дата: $deliveryDay
    Время: $deliveryTime
    Адрес: $address
    Адрес BoxBerry: $boxberryAddress

    Информация о халатах
    Пол: $pickedSex
    Размер халата: $pickedSize
    Надпись: $signInput
    Шрифт: $pickedFont
    Цвет халата: $pickedBathrobeColor
    Рисунок: $pickedImage
    ";

//send email
    mail("babushkin@me.com", "Новый заказ от " .$email, $message, iconv ('utf-8', 'windows-1251'));
}
?>