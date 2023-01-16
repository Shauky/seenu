from .models import User
from .models import *
from django.shortcuts import render
from django.http import JsonResponse,HttpResponseBadRequest
import json

# Create your views here.
def store(request):
    if request.user.is_authenticated:
        customer = request.user.customer
    else:
        customer = ''

    order, created = Order.objects.get_or_create(customer=customer, complete=False)
    # items = order.orderitem_set.all()
    cartItems = order.get_cart_items

    products = Product.objects.all()
    context = {'products': products, 'cartItems': cartItems} 
    return render(request, 'store/store.html', context)

def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        # a convenient way to look up object with given kwargs, create one if necessary
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items =  [ ]
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping':False}

    cartItems = order.get_cart_items
    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request, 'store/cart.html', context)

def checkout(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        # a convenient way to look up object with given kwargs, create one if necessary
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items =  [ ]
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping':False}
    
    cartItems = order.get_cart_items
    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request,  'store/checkout.html', context)

def updateItem(request):
    try:
        data = json.loads(request.body)
    except ValueError:
        return HttpResponseBadRequest('Invalid JSON format')

    try:
        productId = data['productId']
        action = data['action']
    except KeyError:
        return HttpResponseBadRequest('Missing required fields')

    data = json.loads(request.body)
    productId = data['productId'] 
    action = data['action']
    print({'Product': productId})
    print({'Action': action})

    customer = request.user.customer
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)

    orderItem, created = OrderItem.objects.get_or_create(order=order, product = product)

    if action == 'add':
        orderItem.quantity =(orderItem.quantity +1)
    elif action == 'remove':
        orderItem.quantity =(orderItem.quantity - 1)
    
    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()
        
    return JsonResponse('all okay', safe=False)