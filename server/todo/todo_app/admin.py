from django.contrib import admin
from .models import Author, Tag, Record
# Register your models here.
admin.site.register(Record)
admin.site.register(Tag)


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "position", "record_count")
    readonly_fields = ("record_count",)


    @admin.display(description="Количество записей")
    def record_count(self, object):
        return str(object.record_count)
