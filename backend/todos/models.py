from django.db import models

# Short choices for the 'status' field.
class Status(models.TextChoices):
    OFFEN = 'offen', 'Offen'
    IN_BEARBEITUNG = 'in_bearbeitung', 'In Bearbeitung'
    ERLEDIGT = 'erledigt', 'Erledigt'

class Todo(models.Model):
    
    # Title
    title = models.CharField(max_length=200, blank=False, null=False)

    # Description
    description = models.TextField(blank=True, null=True)

    # Status with choices, default is 'offen'
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.OFFEN
    )

   # Readable representation
    def __str__(self):
        return self.title