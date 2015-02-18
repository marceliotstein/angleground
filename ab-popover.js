angular.module('projectStore').controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
  $scope.dynamicPopoverImage = "http://placekitten.com/g/300/300";
});


angular.module('projectStore').directive("popoverHtmlUnsafePopup", function () {
  return {
    restrict: "EA",
    replace: true,
    scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
    templateUrl: "popover-html.html"
    };
})

angular.module('projectStore').directive("popoverHtmlUnsafe", [ "$tooltip", function ($tooltip) {
    return $tooltip("popoverHtmlUnsafe", "popover", "click");
}]);
