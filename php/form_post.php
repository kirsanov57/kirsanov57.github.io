<?php
    $file = 'test.txt';

    $fh = fopen($file, 'c');
    fseek($fh, 0, SEEK_END);
    foreach($_POST as $key => $value) {
        fwrite($fh, PHP_EOL . $value);
    }
    fclose($fh);

    