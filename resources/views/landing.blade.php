<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Treclon</title>
    <link rel="icon" href="{{ asset('assets/img/logo.png') }}">
    <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
    <link href=" {{ mix('css/custom.css') }}" rel="stylesheet">
    <link href=" {{ mix('css/temp.css') }}" rel="stylesheet">
    <link href=" {{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href=" {{ asset('css/font-awesome.min.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <div id="app">
        <app></app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
</body>

</html>