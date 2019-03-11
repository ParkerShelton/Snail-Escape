<?php

//What will be sent back to the front end with all the necessary data
class SnailResults {
  public $succeeded;
  public $dailyDetails;
  public $hudf;

  //Constructor
  public function __contruct($succeeded, $finalDay, $dailyDetails, $hudf) {
    $this->succeeded = $succeeded;
    $this->finalDay = $finalDay;
    $this->dailyDetails = $dailyDetails;
    $this->hudf = $hudf;
  }
}

?>