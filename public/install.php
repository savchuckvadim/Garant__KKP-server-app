<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        import React from 'react';
        const bitrixInstall = async () => {
            BX24API.install(function() {
                BX24API.callMethod('user.current', {}, function(res) {
                    alert('Приложение Продай Гарант приветствует вас, ' + res.data().NAME + '!');
                    BX24API.installFinish();
                });
            });
        }
        bitrixInstall();
    </script>
</body>

</html>