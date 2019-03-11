<?php

//All the information that happens each day of the snails escape
class DailyDetail {
  public $day;
  public $climbDist;
  public $fallDist;
  public $endDist;

  //Constructor
  public function __construct($day, $climbDist, $fallDist, $endDist) {
    $this->day = $day;
    $this->climbDist = $climbDist;
    $this->fallDist = $fallDist;
    $this->endDist = $endDist;
  }
}

?>