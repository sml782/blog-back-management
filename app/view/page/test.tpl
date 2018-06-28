{% extends "../layout/layout.tpl" %}

{% block content %}
	<div id="editormd">
	    <textarea style="display:none;">{{ fileContent }}</textarea>
	</div>

	<button class="btn-submit" id="submit">保存</button>
	<button class="btn-submit btn-cancle">取消</button>
{% endblock %}

