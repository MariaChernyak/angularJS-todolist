// var app = angular.module('app', []);
// app.controller('tab-controller', function(){

// })
// app.directive('tabControl', function(){
// 	return{
// 		restrict: 'E',
//    	   	transclude: true,
//    	   	scope: {},
//    	   	templateUrl: 'template/tabControl.html',
//    	   	controller: function($scope){
//    	   		$scope.panes = [];
//    	   		this.registerPane = function(pane){
//    	   			$scope.panes.push(pane);
//    	   			if($scope.panes.length === 1){
//    	   				pane.selected = true;
//    	   			}
//    	   		}, 
//    	   		$scope.onPaneActivated = function(pane){
//    	   			for(var i = 0; i < $scope.panes.length; i++){
//    	   				$scope.panes[i].selected = false;
//    	   			}
//    	   			pane.selected = true;

//    	   		}
//    	   	}
// 	}
// })
// app.directive('pane', function(){
// 	return{
// 		restrict: 'E',
// 		transclude: true,
// 		scope: {
// 			title: '@'
// 		},
// 		link($scope, element, attr, ctrl){
// 			ctrl.registerPane($scope);
// 		},
// 		templateUrl: 'template/pane.html',
// 		require: '^tabControl'
// 	}
// })
var app = angular.module('todoApp',[]);
app.controller('todoAppController', function(){

})
app.controller('todoListController', function($scope){

})
app.directive('todoList', function(){
   return{
      restrict: 'E',
      transclude: true,
      scope: {
         title: '@'
      },
      replace: true,
     controller: function($scope){
         $scope.todoList = [];
         this.registerTodo = function(todo){
              $scope.todoList.push(todo);
          }
      },
 
      templateUrl: 'template/todoList.html',
   }
})
app.directive('todo', function(){
      return{
         restrict: 'E',
         transclude: true,
         scope: {
            title: '@'
         },
         replace: true,
         templateUrl: 'template/todo.html',
         // link($scope, element, attr, ctrl){
         //     ctrl.registerTodo($scope);
         // },
         require: '^todoList'
      }
   
})
app.directive('subtask', function(){
    return{
         restrict: 'E',
         transclude: true,
         scope: {
            title: '@'
         },
         replace: true,
         templateUrl: 'template/subtask.html',
         link($scope, element, attr, ctrl){
             ctrl.registerTodo($scope);
         },
         require: '^todoList'
      }
})