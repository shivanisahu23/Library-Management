# Copyright (c) 2025, Shivani Sahu and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class LibraryMember(Document):
	def before_save(self):
		self.full_name = f'{self.first_name} {self.last_name or ""}'
		# doc = frappe.get_doc("Library Member", self.name)
		# print(doc, "============")
	
	def validate(self):
		doc = frappe.get_doc("Library Member", self.name)
		print(doc.email, "============")