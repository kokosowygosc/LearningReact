from django.db import models


class Learn(models.Model):
    test = models.CharField(max_length=100)

    def _str_(self):
        return self.test
