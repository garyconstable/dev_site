<?php $version=8;?><!doctype html>
<html class="no-js" lang="">
<head>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140401895-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-140401895-1');
    </script>

    <meta charset="utf-8">
    <title>Gary Constable - Frontend PHP Developer | North Devon</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png">
    
    <link rel="manifest" href="/assets/site.webmanifest">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/dist/css/dist_<?=$version;?>_.css">
</head>
<body>
    <div id="app">
        <sidenav></sidenav>
        <contact></contact>
        <div class="the-page">
            <div class="container">
                <div class="row">
                    <sidebar></sidebar>
                    <main-content></main-content>
                </div>
            </div>
            <main-footer></main-footer>
        </div>
    </div>
    <script src="/assets/dist/js/dist_<?=$version;?>_.js"></script>
</body>
</html>
