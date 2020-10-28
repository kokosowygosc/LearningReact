from .models import Learn
from .serializers import LearnSerializer
from rest_framework import viewsets


class LearnView(viewsets.ModelViewSet):
    serializer_class = LearnSerializer
    queryset = Learn.objects.all()
