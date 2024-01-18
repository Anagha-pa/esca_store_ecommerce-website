from django.shortcuts import render
from rest_framework import generics,permissions,pagination,viewsets
from .models import Vendor,Product,Customer,Order,OrderItems,CustomerAddress
from . import serializers

# Create your views here.


class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class = serializers.VendorSerializer


class VendorDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer



class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all().order_by('id')
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination



class ProductDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer



class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = serializers.CustomerSerializer


class CustomerDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = serializers.OrderSerializer


class OrderDetails(generics.ListAPIView):
    # queryset = OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order = Order.objects.get(id=order_id)
        order_items=OrderItems.objects.filter(order=order)
        return order_items
    


class CustomerAddressViewSet(viewsets.ModelViewSet):
    queryset = CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer
