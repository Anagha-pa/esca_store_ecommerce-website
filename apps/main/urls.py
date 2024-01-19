from django.urls import path
from .views import VendorList,VendorDetails,ProductList,ProductDetails,CustomerList,CustomerDetails,OrderList,OrderDetails,CustomerAddressViewSet,ProductRatingViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('address',CustomerAddressViewSet)
router.register('productrating',ProductRatingViewSet)

urlpatterns = [
   
    path('vendor/',VendorList.as_view()),
    path('vendor-details/<int:pk>/',VendorDetails.as_view()),
    path('products/',ProductList.as_view()),
    path('product-details/<int:pk>/',ProductDetails.as_view()),
    #customer
    path('customer/',CustomerList.as_view()),
    path('customer-details/<int:pk>/',CustomerDetails.as_view()),
    #order
    path('order/',OrderList.as_view()),
    path('order-details/<int:pk>/',OrderDetails.as_view()),

]

urlpatterns+=router.urls
