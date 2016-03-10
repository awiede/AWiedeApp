/**
 * Created by andreas.s.wiede on 10-Mar-16.
 */
angular.module('awiedeWebApp')
  .controller('DocsCtrl', ['$scope', function($scope) {
    $scope.init = function() {
      $scope.docs = [
        {
          pdfName: 'A Computational Analysis of the Riemann Zeta Function',
          shortName: 'Zeta Function',
          pdfUrl: 'files/zeta_presentation.pdf',
          downloadName: 'andreas_zeta_presentation.pdf',
          switchName: 'zeta',
          scroll: 0
        }
      ];

      $scope.selection;
    };

    $scope.init();

    $scope.pdfName = 'A Computational Analysis of the Riemann Zeta Function';
    $scope.pdfUrl = 'files/zeta_presentation.pdf';
    $scope.scroll = 0;

    $scope.getNavStyle = function(scroll) {
      if(scroll > 100) return 'pdf-controls fixed';
      else return 'pdf-controls';
    };

    $scope.isActive = function (viewLocation) {
      var isActive = $location.path().indexOf(
          viewLocation.substr(1)) > -1;
      return isActive;

    };
  }]);
