from django.contrib import admin
from .models import Vendor,Product,ProductCategory,Customer,OrderItems,Order


admin.site.register(Vendor)
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItems)


# Register your models here.
