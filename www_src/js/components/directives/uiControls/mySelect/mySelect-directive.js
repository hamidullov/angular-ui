(function () {
    'use strict';

    var MySelect = function ($compile, $interpolate) {
        return {
            restrict: 'EA',
            scope: {
                elementName: '@name',
                controlLabel: '@placeholder',
                ngModel: '=',
                ngDisabled: '=',
                refreshList: '=onRefresh',
                repeat:'@',
                selectedItemTemplate:'@',
                listItemTemplate: '=',
                searchMode : '=ldSearchMode',
                requiredErrorMessage: '@requiredMessage',
                loading :'=',
                list: '=',
                selectedKey: '@'                    
            },
            require: 'ngModel',
            templateUrl: 'js/components/directives/uiControls/mySelect/my-select.html',
            link: function (scope, element, attr, ngModelController) {
                
                //scope.formCtrl = ngModelController[0];
                scope.modelCtrl = ngModelController[0];
                scope.inputModel = {selected: scope.ngModel };
                scope.labelTag = `my-control-${scope.$id}`;
              
                scope.required = angular.isDefined(attr.required);

                scope.formIsInvalid = () => {
                    return scope.modelCtrl.$invalid && !scope.modelCtrl.$pristine;
                }

                scope.$watch('ngModel', (newVal, oldVal) => {
                    scope.inputModel.selected = newVal;
                                                                                                                    
                });
                
                if(scope.listItemTemplate) {
                    scope.listItemtemplateCompiled = $interpolate(scope.listItemTemplate);
                }
                 
                 scope.compileItem = function(item) {
                     return scope.listItemtemplateCompiled(item);
                 }
                
                scope.$watch('inputModel.selected', (newVal, oldVal)=>{
                    if(newVal == oldVal) return;
                    scope.ngModel = newVal; 
                    scope.modelCtrl.$setViewValue(newVal);
                    scope.modelCtrl.$setDirty();                    
                });
            },

        }
    };

    angular.module('myApp.uicontrols', []).directive('mySelect', MySelect);
})();