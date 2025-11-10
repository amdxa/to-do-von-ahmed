from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    """
    Dieses ViewSet stellt automatisch alle CRUD-Aktionen (list, create,
    retrieve, update, destroy) für das Todo-Modell bereit.
    """

    # bring all Todo objects from the database
    queryset = Todo.objects.all()

    # Use the TodoSerializer for the serialization/deserialization
    serializer_class = TodoSerializer