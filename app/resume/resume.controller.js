/**
 * Created by andreas.s.wiede on 10-Mar-16.
 */
angular.module('awiedeWebApp')
  .controller('ResumeCtrl', ['$scope', function($scope) {
    $scope.pdfName = 'My Resume';
    $scope.pdfUrl = 'files/awiede_online_resume.pdf';
    $scope.downloadName = 'awiede_resume.pdf',
      $scope.scroll = 0;

    $scope.getNavStyle = function(scroll) {
      if(scroll > 100) return 'pdf-controls fixed';
      else return 'pdf-controls';
    };
  }]);
