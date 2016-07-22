var app = angular.module('myApp',[])

   app.controller('IndexWorkSectionCtrl',['$scope',function($scope){
         $scope.works = [
                         {
                           name:'Uthapizza',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'Hot',
                           author:'Somebody',
                           price:'499',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'20',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'夏日大作戰',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'231',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'入陣曲',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'213',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'224',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'224',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'New',
                           author:'王峰',
                           price:'210',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'New',
                           author:'王峰',
                           price:'210',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Cake',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'',
                           author:'張懸',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'風起',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'劉德華',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'New',
                           author:'王峰',
                           price:'210',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Cake',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'',
                           author:'張懸',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'風起',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'劉德華',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        }
                    ]
    }])

.directive('owlCarousel',[function() {
    return {
      restrict: 'EA',
      transclude: false,
      scope: {
        owlOptions: '='
      },
      link: function(scope, element, attrs) {
          scope.initCarousel = function() {
            $(element).owlCarousel(scope.owlOptions);
          };
      }
      
    };
  }])
  .directive('owlCarouselItem',[function() {
     return function(scope) {
     if (scope.$last) {
        scope.initCarousel();
     }
    };
  }])

   .controller('WorkController', ['$scope',function($scope){

        $scope.tab = 1;
        $scope.filtText = "phoneCase";

        $scope.works = [
                         {
                           name:'Uthapizza',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'Hot',
                           author:'Somebody',
                           price:'499',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'20',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'夏日大作戰',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'231',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'入陣曲',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'213',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'224',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'image/product-5.jpg',
                           category: 'phoneCase',
                           label:'',
                           author:'Maroon5',
                           price:'224',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'New',
                           author:'王峰',
                           price:'210',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'New',
                           author:'王峰',
                           price:'210',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Cake',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'',
                           author:'張懸',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'風起',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'劉德華',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'New',
                           author:'王峰',
                           price:'210',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'Cake',
                           image: 'image/mug.jpg',
                           category: 'mug',
                           label:'',
                           author:'張懸',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'風起',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'劉德華',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'你說呢',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'林俊傑',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        },
                        {
                           name:'Summer',
                           image: 'image/pic6.jpeg',
                           category: 'canvas',
                           label:'',
                           author:'Me',
                           price:'120',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        }
                    ]

        $scope.select = function(setTab){
            $scope.tab = setTab;
            
            if (setTab === 1)
                $scope.filtText = "phoneCase";
            else if (setTab === 2)
                $scope.filtText = "mug";
            else if (setTab === 3)
                $scope.filtText = "canvas";
            else
                $scope.filtText = "";
        }

        $scope.isSelected = function(checkTab){
            return ($scope.tab === checkTab);
        }

    }]);