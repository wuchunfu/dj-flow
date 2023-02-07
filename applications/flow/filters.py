import django_filters as filters


class NodeTemplateFilter(filters.FilterSet):
    template_type = filters.CharFilter(lookup_expr="iexact")
    name = filters.CharFilter(lookup_expr="icontains")
    description = filters.CharFilter(lookup_expr="icontains")
    template_mode = filters.CharFilter(method="filter_template_mode")

    def filter_template_mode(self, queryset, first_name, value):
        if value == "custom":
            return queryset.filter(template_type__in=[0, 1])
        elif value == "template":
            return queryset.filter(template_type__in=[2])
        return queryset


class ProcessRunFilter(filters.FilterSet):
    process_id = filters.CharFilter(lookup_expr="exact")
    name = filters.CharFilter(lookup_expr="icontains")
    run_type = filters.CharFilter(lookup_expr="exact")
    state = filters.CharFilter(lookup_expr="exact")


class SubProcessRunFilter(filters.FilterSet):
    process_run = filters.CharFilter(lookup_expr="exact")
