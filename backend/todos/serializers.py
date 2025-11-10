from rest_framework import serializers
from .models import Todo  # Todo model


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        # Model used by this serializer
        model = Todo

        # Fields included in the JSON output ('__all__' = all fields)
        fields = '__all__'