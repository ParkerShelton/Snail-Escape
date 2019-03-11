<?php
require_once './SnailResults.php';
require_once './DailyDetail.php';

//Holds all the functions related to the snail
class SnailFunctions {
  public $h;
  public $u;
  public $d;
  public $f;

  //Actually calculates whether the snail gets out or not and when
  public function SnailTest($h, $u, $d, $f) {
    $result = new SnailResults();
    $result->dailyDetails = array();
    $result->hudf = array();
    array_push(($result->hudf), $h, $u, $d, $f);

    $day = 0;
    $snailHeight = 0;
    $fatigue = 0;
    $amountClimb = $u;

    while($snailHeight >= 0 && $snailHeight < $h) {

      //Make sure it didnt slide back down to 0ft
      if ($snailHeight <= 0 && $day != 0) {
        $result->succeeded = false;
        $result->finalDay = $day;
        break;
      }

      $day += 1;

      $amountClimb = ($amountClimb - $fatigue);
      $amountClimb = round($amountClimb);

      $fatigue = ($f/100) * $u;

      //Makes sure you can't have a negative climb amount
      if($amountClimb < 0) {
        $amountClimb = 0;
      }

      $snailHeight += $amountClimb;
      $snailHeight = round($snailHeight);

      //Made it out
      if($snailHeight > $h) {
        $dailyDetail = new DailyDetail($day, $amountClimb, $d, $snailHeight);
        array_push(($result->dailyDetails), $dailyDetail);
        $result->succeeded = true;
        $result->finalDay = $day;
        break;

      }

      //The day is over, now the snail slides down a bit
      $snailHeight -= $d;

      //Makes sure you cant slide into a negative number
      if($snailHeight < 0) {
        $snailHeight = 0;
      }

      $dailyDetail = new DailyDetail($day, $amountClimb, $d, $snailHeight);
      array_push(($result->dailyDetails), $dailyDetail);
    }

    return $result;
  }
}


?>