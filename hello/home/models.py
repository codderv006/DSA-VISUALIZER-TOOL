from django.db import models

# Create your models here.
class Feedmain(models.Model):
    name=models.CharField(max_length=150)
    email=models.CharField(max_length=150)
    subject=models.TextField()
    message=models.TextField()
    #date=models.DateField()
    def __str__(self): 
        return self.name